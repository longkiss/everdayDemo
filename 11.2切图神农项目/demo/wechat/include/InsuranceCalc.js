//carType 0：6座以下，1:6座以上
//市场价
var carType = 0;
function CalcMarketInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch) {
    carType = carType;
    var ci = CalcCi(carType);
    var business = CalcBusinessInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch);
    return ci + Math.round(business * 0.7);
}
//保险公司报价
function CalcCompanyInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch) {
    carType = carType;
    var ci = CalcCi(carType);
    var business = CalcBusinessInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch);
    return ci + business;
}
//
function CalcBusinessInsurance(carType, carPrice, tpl, damage, theft, glass, selfignite, abatement, blameless, passenger, scratch) {
    carType = carType;
    var _buiness = CalcTpl(carPrice, tpl)//第三责任险
        + CalcDamage(carPrice, damage)//车辆损失险 
        + CalcTheft(carPrice, damage, theft)//全国盗抢险
        + CalcGlass(carPrice, glass)//玻璃单独破碎险
        + CalcSelfignite(carPrice, selfignite)//自燃损失险
        + CalcAbatement(carPrice, tpl, damage, abatement)// 不计免赔特约险
        + CalcBlameless(carPrice, tpl, blameless)//无过责任险
        + CalcPassenger(passenger)//车上人员责任险
        + CalcScratch(carPrice, damage, scratch); //划痕险
    //alert(CalcTpl(carPrice, tpl) + "+" + CalcDamage(carPrice, damage) + "+" + CalcTheft(carPrice, theft) + "+" + CalcGlass(carPrice, glass) + "+" + CalcSelfignite(carPrice, selfignite) + "+" + CalcAbatement(carPrice, tpl, damage, abatement) + "+" + CalcBlameless(carPrice, tpl, blameless) + "+" + CalcPassenger(passenger) + "+" + CalcScratch(carPrice, damage, scratch));
    return _buiness;
}
//交强险 
function CalcCi(carType) {
    return carType == 0 ? 950 : 1100;
}
//第三责任险
function CalcTpl(carPrice, tpl) {
    var _tpl = 0;
    switch (tpl) {
        case 0: _tpl = 0; break;
        case 5: _tpl = carType == 0 ? 516 : 478; break;
        case 10: _tpl = carType == 0 ? 746 : 674; break;
        case 20: _tpl = carType == 0 ? 924 : 821; break;
        case 50: _tpl = carType == 0 ? 1252 : 1094; break;
        case 100: _tpl = carType == 0 ? 1630 : 1425; break;
    }
    return _tpl;
}
//车辆损失险 基本保费+裸车价格*1.0880%
function CalcDamage(carPrice, damage) {
    var _damage = 0;
    if (damage > 0) {
        var bp = carType == 0 ? 459 : 550;
        _damage = bp + Math.round(carPrice * 1.0880 / 100);
    }
    return _damage;
}
//全国盗抢险 基础保费+裸车价格×费率
function CalcTheft(carPrice, damage, theft) {
    var _theft = 0;
    if (theft > 0 && damage > 0) {
        var rate = carType == 0 ? 0.004505 : 0.00374;
        var bp = carType == 0 ? 102 : 119;
        _theft = bp + Math.round(carPrice * rate);
    }
    return _theft;
}
//玻璃单独破碎险 裸车售价*费率 glass 10 :  不选择 1：国产 2：进口
function CalcGlass(carPrice, glass) {
    var _glass = 0;
    switch (glass) {
        case 1: _glass = Math.round(carPrice * 0.15 / 100); break;
        case 2: _glass = Math.round(carPrice * 0.25 / 100); break;
    }
    return _glass;
}
//自燃损失险 裸?售价*0.15%
function CalcSelfignite(carPrice, selfignite) {
    var _selfignite = 0;
    if (selfignite > 0) {
        _selfignite = Math.round(carPrice * 0.15 / 100);
    }
    return _selfignite;
}
// 不计免赔特约险：（车辆损失险+第三责任险）*20% （第三者责任险和车辆损失险开启有效）
function CalcAbatement(carPrice, tpl, damage, abatement) {
    var _selfignite = 0;
    if (abatement > 0) {
        if (tpl > 0 && damage > 0) {
            var _tpl = CalcTpl(carPrice, tpl);
            var _damage = CalcDamage(carPrice, damage);
            _selfignite = Math.round((_tpl + _damage) * 0.2);
        }
    }
    return _selfignite;
}
//无过责任险：第三者责任险保险费×20%（第三者责任险开启有效）
function CalcBlameless(carPrice, tpl, blameless) {
    var _blameless = 0;
    if (blameless > 0 && tpl > 0) {
        var _tpl = CalcTpl(carPrice, tpl);
        _blameless = Math.round(_tpl * 0.2);
    }
    return _blameless;
}
//车上人员责任险：每人保费（50）*人数
function CalcPassenger(passenger) {
    return passenger * 50;
}
//划痕险
function CalcScratch(carPrice, damage, scratch) {
    var _stratch = 0;
    if (scratch > 0 && damage > 0) {
        switch (scratch) {
            case 2: if (carPrice < 300000) { _stratch = 400; } else if (carPrice > 500000) { _stratch = 850; } else _stratch = 585; break;
            case 5: if (carPrice < 300000) { _stratch = 570; } else if (carPrice > 500000) { _stratch = 1100; } else _stratch = 900; break;
            case 10: if (carPrice < 300000) { _stratch = 760; } else if (carPrice > 500000) { _stratch = 1500; } else _stratch = 1170; break;
            case 20: if (carPrice < 300000) { _stratch = 1140; } else if (carPrice > 500000) { _stratch = 2250; } else _stratch = 1780; break;
        }
    }
    return _stratch
}