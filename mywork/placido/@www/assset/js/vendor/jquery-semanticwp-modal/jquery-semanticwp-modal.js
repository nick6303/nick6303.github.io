/*!
 * SemanticWP Modal
 * @version 1.2.0
 * @author Sergey Predvoditelev
 */
(function($) {
    var default_options = {
        type: "html",
        content: "",
        url: "",
        ajax: {},
        ajax_request: null,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        clone: false,
        overlay: {
            block: undefined,
            tpl: '<div class="swpmodal-overlay"></div>',
            css: {
                backgroundColor: "#f4f4f4",
                // opacity: .8
            }
        },
        container: {
            block: undefined,
            tpl: '<div class="swpmodal-container"><div class="swpmodal-container_i"><div class="swpmodal-container_i2"></div></div></div>'
        },
        preloader: {
            verticalAlign: undefined,
            tpl: '<div class="swpmodal-preloader" />'
        },
        wrap: undefined,
        body: undefined,
        errors: {
            tpl: '<div class="swpmodal-error swpmodal-close"></div>',
            autoclose_delay: 2e3,
            ajax_unsuccessful_load: "Error"
        },
        openEffect: {
            type: "fade",
            speed: 400
        },
        closeEffect: {
            type: "fade",
            speed: 400
        },
        width: "auto",
        verticalAlign: "middle",
        beforeOpen: $.noop,
        afterOpen: $.noop,
        beforeClose: $.noop,
        afterClose: $.noop,
        afterLoading: $.noop,
        afterLoadingOnShow: $.noop,
        errorLoading: $.noop
    };
    var modalID = 0;
    var modals = $([]);
    var utils = {
        isEventOut: function(blocks, e) {
            var r = true;
            $(blocks).each(function() {
                if ($(e.target).get(0) == $(this).get(0)) r = false;
                if ($(e.target).closest("HTML", $(this).get(0)).length == 0) r = false
            });
            return r
        }
    };
    var modal = {
        getParentEl: function(el) {
            var r = $(el);
            if (r.data("swpmodal")) return r;
            r = $(el).closest(".swpmodal-container").data("swpmodalParentEl");
            if (r) return r;
            return false
        },
        transition: function(el, action, options, callback) {
            callback = callback == undefined ? $.noop : callback;
            switch (options.type) {
                case "fade":
                    action == "show" ? el.fadeIn(options.speed, callback) : el.fadeOut(options.speed, callback);
                    break;
                case "none":
                    action == "show" ? el.show() : el.hide();
                    callback();
                    break
            }
        },
        set_wrap_margin_right: function(D, offset) {
            D.wrap.css("marginRight", offset + "px");
            $(document).trigger("swpmodalSetWrapMarginRight", offset)
        },
        init_el: function($this, options) {
            var D = $this.data("swpmodal");
            if (D) return;
            D = options;
            modalID++;
            D.modalID = modalID;
            D.overlay.block = $(D.overlay.tpl);
            D.overlay.block.css(D.overlay.css);
            D.container.block = $(D.container.tpl);
            D.body = $(".swpmodal-container_i2", D.container.block);
            if (options.clone) {
                D.body.html($this.clone(true))
            } else {
                $this.before('<div id="swpmodalReserve' + D.modalID + '" style="display: none" />');
                D.body.html($this)
            }
            D.body.on("click", ".swpmodal-close", function() {
                $this.swpmodal("close");
                return false
            });
            if (D.closeOnOverlayClick) D.overlay.block.add(D.container.block).click(function(e) {
                if (utils.isEventOut($(">*", D.body), e)) $this.swpmodal("close")
            });
            D.container.block.data("swpmodalParentEl", $this);
            $this.data("swpmodal", D);
            modals = $.merge(modals, $this);
            $.proxy(actions.show, $this)();
            if (D.type == "html") return $this;
            if (D.ajax.beforeSend != undefined) {
                var fn_beforeSend = D.ajax.beforeSend;
                delete D.ajax.beforeSend
            }
            if (D.ajax.success != undefined) {
                var fn_success = D.ajax.success;
                delete D.ajax.success
            }
            if (D.ajax.error != undefined) {
                var fn_error = D.ajax.error;
                delete D.ajax.error
            }
            var o = $.extend(true, {
                url: D.url,
                beforeSend: function() {
                    D.body.html(D.preloader.tpl).css("verticalAlign", D.preloader.verticalAlign === undefined ? D.verticalAlign : D.preloader.verticalAlign);
                    if (fn_beforeSend !== undefined) fn_beforeSend(D, $this)
                },
                success: function(response) {
                    $this.trigger("afterLoading");
                    response = D.afterLoading(D, $this, response) || response;
                    D.body.css("verticalAlign", D.verticalAlign);
                    if (fn_success == undefined) {
                        D.body.html(response)
                    } else {
                        fn_success(D, $this, response)
                    }
                    $this.trigger("afterLoadingOnShow");
                    D.afterLoadingOnShow(D, $this, response)
                },
                error: function() {
                    $this.trigger("errorLoading");
                    D.errorLoading(D, $this);
                    if (fn_error == undefined) {
                        D.body.html(D.errors.tpl);
                        $(".swpmodal-error", D.body).html(D.errors.ajax_unsuccessful_load);
                        $(".swpmodal-close", D.body).click(function() {
                            $this.swpmodal("close");
                            return false
                        });
                        if (D.errors.autoclose_delay) setTimeout(function() {
                            $this.swpmodal("close")
                        }, D.errors.autoclose_delay)
                    } else {
                        fn_error(D, $this)
                    }
                }
            }, D.ajax);
            D.ajax_request = $.ajax(o);
            $this.data("swpmodal", D)
        },
        init: function(options) {
            options = $.extend(true, {}, default_options, options);
            if ($.isFunction(this)) {
                if (options == undefined) {
                    $.error("jquery.swpmodal: Uncorrect parameters");
                    return
                }
                if (options.type == "") {
                    $.error('jquery.swpmodal: Don\'t set parameter "type"');
                    return
                }
                switch (options.type) {
                    case "html":
                        if (options.content == "") {
                            $.error('jquery.swpmodal: Don\'t set parameter "content"');
                            return
                        }
                        var c = options.content;
                        options.content = "";
                        return modal.init_el($(c), options);
                        break;
                    case "ajax":
                        if (options.url == "") {
                            $.error('jquery.swpmodal: Don\'t set parameter "url"');
                            return
                        }
                        return modal.init_el($("<div />"), options);
                        break
                }
            } else {
                return this.each(function() {
                    modal.init_el($(this), $.extend(true, {}, options))
                })
            }
        }
    };
    var actions = {
        show: function() {
            var $this = modal.getParentEl(this);
            if ($this === false) {
                $.error("jquery.swpmodal: Uncorrect call");
                return
            }
            var D = $this.data("swpmodal");
            D.overlay.block.hide();
            D.container.block.hide();
            $("BODY").append(D.overlay.block);
            $("BODY").append(D.container.block);
            D.container.block.css("zIndex", D.overlay.block.css("zIndex"));
            D.beforeOpen(D, $this);
            $this.trigger("beforeOpen");
            if (D.wrap.css("overflow-y") != "hidden") {
                D.wrap.data("swpmodalOverflow", D.wrap.css("overflow-y"));
                var w1 = D.wrap.outerWidth(true);
                D.wrap.css("overflow-y", "hidden");
                var w2 = D.wrap.outerWidth(true);
                if (w2 != w1) modal.set_wrap_margin_right(D, w2 - w1)
            }
            modals.not($this).each(function() {
                var d = $(this).data("swpmodal");
                d.overlay.block.hide()
            });
            D.body.css("verticalAlign", D.verticalAlign);
            D.body.parent().css("width", D.width);
            modal.transition(D.overlay.block, "show", modals.length > 1 ? {
                type: "none"
            } : D.openEffect);
            modal.transition(D.container.block, "show", modals.length > 1 ? {
                type: "none"
            } : D.openEffect, function() {
                D.afterOpen(D, $this);
                $this.trigger("afterOpen")
            });
            return $this
        },
        close: function() {
            if ($.isFunction(this)) {
                modals.each(function() {
                    $(this).swpmodal("close")
                })
            } else {
                return this.each(function() {
                    var $this = modal.getParentEl(this);
                    if ($this === false) {
                        $.error("jquery.swpmodal: Uncorrect call");
                        return
                    }
                    var D = $this.data("swpmodal");
                    if (D.beforeClose(D, $this) === false) return;
                    $this.trigger("beforeClose");
                    modals.not($this).last().each(function() {
                        var d = $(this).data("swpmodal");
                        d.overlay.block.show()
                    });
                    modal.transition(D.overlay.block, "hide", modals.length > 1 ? {
                        type: "none"
                    } : D.closeEffect);
                    modal.transition(D.container.block, "hide", modals.length > 1 ? {
                        type: "none"
                    } : D.closeEffect, function() {
                        D.afterClose(D, $this);
                        $this.trigger("afterClose");
                        if (!D.clone) $("#swpmodalReserve" + D.modalID).replaceWith(D.body.find(">*"));
                        D.overlay.block.remove();
                        D.container.block.remove();
                        $this.data("swpmodal", null);
                        if (!$(".swpmodal-container").length) {
                            if (D.wrap.data("swpmodalOverflow")) D.wrap.css("overflow-y", D.wrap.data("swpmodalOverflow"));
                            modal.set_wrap_margin_right(D, 0)
                        }
                    });
                    if (D.type == "ajax") D.ajax_request.abort();
                    modals = modals.not($this)
                })
            }
        },
        setDefault: function(options) {
            $.extend(true, default_options, options)
        }
    };
    $(function() {
        default_options.wrap = $(document.all && !document.querySelector ? "html" : "body")
    });
    $(document).bind("keyup.swpmodal", function(e) {
        var m = modals.last();
        if (!m.length) return;
        var D = m.data("swpmodal");
        if (D.closeOnEsc && e.keyCode === 27) m.swpmodal("close")
    });
    $.swpmodal = $.fn.swpmodal = function(method) {
        if (actions[method]) {
            return actions[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === "object" || !method) {
            return modal.init.apply(this, arguments)
        } else {
            $.error("jquery.swpmodal: Method " + method + " does not exist")
        }
    }
})(jQuery);
