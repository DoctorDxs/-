module.exports = {
    // 关闭弹出框
    cancelBox(e) {
        this._showToggle(e);
    },
    // 切换规格
    changeRule(e) {
        let shop_detail = wx.getStorageSync("_shop_detail");
        shop_detail.sku_list.forEach(val => {
            if (val.id == e.currentTarget.dataset.sku.id) {
                val.selectSKU = true;
                shop_detail.selected_sku = val;
            } else {
                val.selectSKU = false;
            }
        });
        shop_detail.pintuan_price = shop_detail.group_status ? (e.currentTarget.dataset.sku.price * shop_detail.group.discount / 100).toFixed(2) : '';
        wx.setStorageSync("_sku_id", e.currentTarget.dataset.sku.id);
        wx.setStorageSync("_shop_detail", shop_detail);
        this.setData({
            detail_info: shop_detail
        });
    },
    // 更新购买的数量
    handleZanQuantityChange(e) {
        let shop_detail = wx.getStorageSync("_shop_detail");
        shop_detail.quantity = e.quantity;
        this.setData({
            detail_info: shop_detail
        });
        wx.setStorageSync("_shop_detail", shop_detail);
    },
    _setCartOBJ: function (data) {
        // 购物车内信息对象 包含属性（商品id、规格id、商品名称、商品价格、该规格id下商品库存、商品数量、商品图片）
        const cartOBJ = {
            id: data.id,
            sku_id: null,
            sku: {},
            name: data.name,
            price: null,
            store: null,
            quantity: data.quantity,
            file: data.file,
            isSelected: true, //默认加入购物车的是选中状态
            fee_id: data.fee_id,
            fee_info: data.fee_info,
            fee_price: data.fee_price,
            fee_type: data.fee_type,
            freight_unit: data.freight_unit,
            weight: data.weight,
            fx_status: data.fx_status,
            group_status: data.group_status,
            group_num: data.group ? data.group.num : ''
        };
        return cartOBJ;
    },
    // 点击确定加入购物车
    sureBtn: function (e) {
        const that = this;
        that._showToggle(e);
        const shop_detail = e.currentTarget.dataset.data;
        let sku_id = wx.getStorageSync("_sku_id");
        let _store = 0;
        if (shop_detail.sku_list && shop_detail.sku_list.length) {
            shop_detail.sku_list.forEach(val => {
                if (val.id == sku_id) {
                    _store = val.store;
                }
            });
        } else {
            _store = shop_detail.store;
        }
        if (shop_detail.quantity > _store) {
            wx.showModal({
                title: "",
                content: "库存不足",
                showCancel: false
            });
            shop_detail.quantity = 1;
            that.setData({
                detail_info: shop_detail
            });
        } else {
            let cartOBJ = that._setCartOBJ(shop_detail);
            if (shop_detail.sku_list && shop_detail.sku_list.length > 0) {
                cartOBJ.sku_id = sku_id;
                shop_detail.sku_list.forEach((val, i) => {
                    if (val.id == sku_id) {
                        cartOBJ.sku = val;
                        cartOBJ.store = val.store;
                        cartOBJ.price = val.price;
                    }
                });
            } else {
                cartOBJ.store = shop_detail.store;
                cartOBJ.price = shop_detail.price;
            }
            that._addToCart(cartOBJ);
        }
    },
    // 将商品加入购物车
    /**
     * 购物车内单个商品信息
     * 商品id、规格id、商品名称、商品价格、该规格id下商品库存、商品数量、商品图片 
     */
    _addToCart: function (obj) {
        if (obj.store == 0) {
            wx.showModal({
                title: "",
                content: "库存不足",
                showCancel: false
            });
            return;
        }
        const that = this;
        let _cart = [];
        if (that.data.shop_id > 0) {
            _cart = wx.getStorageSync("_dp_shopcart");
        } else {
            _cart = wx.getStorageSync("_shopcart");
        }
        if (_cart && _cart.length > 0) {
            // 判断购物车中是否已经加入该商品
            if (JSON.stringify(_cart).indexOf(JSON.stringify(obj).split('"name"')[0]) == -1) {
                _cart.push(obj);
            } else {
                _cart.forEach(val => {
                    if (val.id == obj.id && val.sku_id == obj.sku_id) {
                        if (val.quantity < val.store) {
                            val.quantity++;
                        } else {
                            wx.showModal({
                                title: "",
                                content: "库存不足",
                                showCancel: false
                            });
                        }
                    }
                });
            }
        } else {
            _cart = [];
            _cart.push(obj);
        }
        if (that.data.shop_id > 0) {
            wx.setStorageSync("_dp_shopcart", _cart);
        } else {
            wx.setStorageSync("_shopcart", _cart);
        }
        that._judgeStorage();
    },
    // 点击 立即购买 跳转到  提交订单页面
    nextStep: function (e) {
        const that = this;
        that._showToggle(e);
        const _cartData = e.currentTarget.dataset.data;
        let cartOBJ = that._setCartOBJ(_cartData);
        let sku_id = wx.getStorageSync("_sku_id");
        if (_cartData.sku_list && _cartData.sku_list.length > 0) {
            cartOBJ.sku_id = sku_id;
            _cartData.sku_list.forEach(val => {
                if (val.id == sku_id) {
                    cartOBJ.store = val.store;
                    cartOBJ.price = this.data.btnStatus.buyAlone ? val.price : (val.price * _cartData.group.discount / 100).toFixed(2);
                }
            });
        } else {
            cartOBJ.store = _cartData.store;
            cartOBJ.price = this.data.btnStatus.buyAlone ? _cartData.price : (_cartData.price * _cartData.group.discount / 100).toFixed(2);

        }
        if (_cartData.group_status){
            if (_cartData.group.is_free) {
                cartOBJ.is_free = _cartData.group.is_free;
                cartOBJ.bargain = _cartData.group.bargain;
            }
        }
        that._goPay(cartOBJ);
    },
    _goPay: function (obj) {
        let _data = [];
        obj.isSelected = true;
        _data.push(obj);
        let _status = 0;
        if (this.data.btnStatus.isAddCart || this.data.btnStatus.buyAlone) {
            _status = 0;
        } else if (!this.data.btnStatus.buyAlone && obj.group_status) {
            _status = 1;
        }
        wx.setStorageSync('zhls_buy_shop_info', JSON.stringify(_data))
        if (this.data.join_group){
            wx.redirectTo({
                url: "../../../pay/index?no_exist_cart=1&is_group=" + _status + "&shop_id=" + this.data.shop_id
            });
        }else{
            wx.redirectTo({
                url: "../../pay/index?no_exist_cart=1&is_group=" + _status + "&shop_id=" + this.data.shop_id
            });
        }
    }
};
