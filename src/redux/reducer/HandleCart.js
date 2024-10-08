const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            // Check if Product Already Exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Agar mahsulot allaqachon mavjud bo'lsa, miqdorini oshiramiz
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // Mahsulotni savatchaga qo'shamiz
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1, // Yangi mahsulot uchun miqdor 1 bo'ladi
                    }
                ];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            
            if (!exist1) {
                // Agar mahsulot savatchada topilmasa, mavjud bo'lmagan mahsulotni o'chira olmaymiz
                return state;
            }

            if (exist1.qty === 1) {
                // Agar mahsulotning miqdori 1 bo'lsa, savatchadan o'chiramiz
                return state.filter((x) => x.id !== exist1.id);
            } else {
                // Aks holda, miqdorni kamaytiramiz
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state; // Har qanday boshqa action uchun, dastlabki holatni qaytaramiz
    }
};

export default handleCart;
