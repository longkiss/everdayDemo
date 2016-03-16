/// <reference path="../../jquery-2.1.0.min.js" />
$(function () {
	var urlVars = getUrlVars();//获取url上的参数
	var jg = urlVars["jiage"];
	$('.input-car-price').val(jg) ;
    tool.baoxian.init();
});
var tool = tool || {};
tool.baoxian = new function () {
    var _self = this;
    var carPrice; //裸车售价
    _self.init = function () {
        var that = this;
        carPrice = $('.input-car-price').val();
        that.jqxCalc();
        that.zr3Calc();
        that.csCalc();
        that.dqCalc();
        that.blCalc();
        that.zrCalc();
        that.mpCalc();
        that.wgCalc();
        that.ryCalc();
        that.hhCalc();
        that.calc();
        $('.input-car-price').bind('keyup', function () {
            carPrice = $('.input-car-price').val();
            if (carPrice != '') {
                that.jqxCalc();
                that.zr3Calc();
                that.csCalc();
                that.dqCalc();
                that.blCalc();
                that.zrCalc();
                that.mpCalc();
                that.wgCalc();
                that.ryCalc();
                that.hhCalc();
                that.calc();
            }
        });
        $('#jqx').bind('change', function () {
            that.jqxCalc();
            that.calc();
        });
        $('#zr3').bind('change', function () {
            that.zr3Calc();
            if ($(this).val() != '0') {
                if ($('#cs').is(':checked')) {
                    ////第三责任险与车损险都开启,不计免赔特约险才有效
                    $('#mp').removeAttr('disabled');
                }
                //第三责任险开启,无过责任险才有效
                $('#wg').removeAttr('disabled');
            } else {
                $('#mp').attr('disabled', 'disabled').attr('checked', false);
                $('#wg').attr('disabled', 'disabled').attr('checked', false);
            }
            that.calc();
        });
        $('#cs').bind('change', function () {
            if ($(this).is(':checked')) {
                if ($('#zr3').val() != '0') {
                    //车损与第三责任都开启,不计免赔特约险才有效
                    $('#mp').removeAttr('disabled');
                }
                //车损险开启,划痕险才生效
                $('#hh').removeAttr('disabled');
                //车损险开启,盗抢险才有效
                $('#dq').removeAttr('disabled');
                that.csCalc();
            } else {
                $('#mp').attr('disabled', 'disabled').attr('checked', false);
                $('#csVal').text(CalcDamage(carPrice, 0) + ' 元')
                $('#hh').attr('disabled', 'disabled').attr('checked', false);
                $('#dq').attr('disabled', 'disabled').attr('checked', false);
            }
            that.calc();
        });
        $('#dq').bind('change', function () {
            that.dqCalc();
            that.calc();
        });
        $('#bl').bind('change', function () {
            that.blCalc();
            that.calc();
        });
        $('#zr').bind('change', function () {
            that.zrCalc();
            that.calc();
        });
        $('#mp').bind('change', function () {
            that.mpCalc();
            that.calc();
        });
        $('#wg').bind('change', function () {
            that.wgCalc();
            that.calc();
        });
        $('#ry').bind('change', function () {
            that.ryCalc();
            that.calc();
        });
        $('#hh').bind('change', function () {
            that.hhCalc();
            that.calc();
        });
    };
    _self.calc = function () {
        var carType = 0, //交强险(根据车型 0：6座以下，1:6座以上)
                tpl = 0, //第三者责任险
                damage = 0, //车辆损失险
                theft = 0, //全车盗抢险
                glass = 0, //玻璃单独破碎险
                selfignite = 0, //自然损失险
                abatement = 0, //不计免赔特约险
                blameless = 0, //无过责任险
                passenger = 0, //车上人员责任除
                scratch = 0; //车身划痕
        carType = parseInt($('#jqx').val());
        carPrice = $('.input-car-price').val();
        if (!$.isNumeric(carPrice)) {
            //alert("请输入正确的裸车售价");
            return;
        }
        tpl = parseInt($('#zr3').val());
        damage = $('#cs').is(':checked') ? 1 : 0;
        theft = $('#dq').is(':checked') ? 1 : 0;
        glass = parseInt($('#bl').val());
        selfignite = $('#zr').is(':checked') ? 1 : 0;
        abatement = $('#mp').is(':checked') ? 1 : 0;
        blameless = $('#wg').is(':checked') ? 1 : 0;
        passenger = parseInt($('#ry').val());
        scratch = $('#hh').is(':disabled') ? 0 : parseInt($('#hh').val());
        var result = CalcMarketInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch);
        $('#marketPrice').text(result + ' 元');
        result = CalcCompanyInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch);
        $('#companyPrice').text(result + ' 元');
    };
    _self.jqxCalc = function () {
        $('#jqxVal').text(CalcCi(parseInt($('#jqx').val())) + ' 元')
    };
    _self.zr3Calc = function () {
        $('#zr3Val').text(CalcTpl(carPrice, parseInt($('#zr3').val())) + ' 元');
    };
    _self.csCalc = function () {
        var v = $('#cs').is(':checked') ? 1 : 0;
        $('#csVal').text(CalcDamage(carPrice, 1) + ' 元')
    };
    _self.dqCalc = function () {
        var v = $('#dq').is(':checked') ? 1 : 0;
        $('#dqVal').text(CalcTheft(carPrice, 1, v) + ' 元')
    };
    _self.blCalc = function () {
        $('#blVal').text(CalcGlass(carPrice, parseInt($('#bl').val())) + ' 元')
    };
    _self.zrCalc = function () {
        var v = $('#zr').is(':checked') ? 1 : 0;
        $('#zrVal').text(CalcSelfignite(carPrice, v) + ' 元')
    };
    _self.mpCalc = function () {
        var v = $('#mp').is(':checked') ? 1 : 0;
        $('#mpVal').text(CalcAbatement(carPrice, parseInt($('#zr3').val()), $('#cs').is(':checked') ? 1 : 0, v) + ' 元')
    };
    _self.wgCalc = function () {
        var v = $('#wg').is(':checked') ? 1 : 0;
        $('#wgVal').text(CalcBlameless(carPrice, parseInt($('#zr3').val()), v) + ' 元')
    };
    _self.ryCalc = function () {
        $('#ryVal').text(CalcPassenger(parseInt($('#ry').val())) + ' 元')
    };
    _self.hhCalc = function () {
        $('#hhVal').text(CalcScratch(carPrice, 1, parseInt($('#hh').val())) + ' 元')
    };
};
