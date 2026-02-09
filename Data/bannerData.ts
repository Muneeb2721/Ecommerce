export type BannerKey =
    | "shop"
    | "comparison"
    | "cart"
    | "checkout"
    | "contact"
    | "blog";

type BannerDataItem = {
    title: string;
    breadcrumb: string;
    showLogo?: boolean;
};

export const bannerData: Record<BannerKey, BannerDataItem> = {

    shop: {
        title: "Shop",
        breadcrumb: "Shop",
        showLogo: false,
    },
    comparison: {
        title: "Product Comparison",
        breadcrumb: "Comparison",
        showLogo: true,
    },
    cart: {
        title: "Cart",
        breadcrumb: "Cart",
        showLogo: true,
    },
    checkout: {
        title: "Checkout",
        breadcrumb: "Checkout",
        showLogo: false,
    },
    contact: {
        title: "Contact",
        breadcrumb: "Contact",
        showLogo: true,
    },
    blog: {
        title: "Blog",
        breadcrumb: "Blog",
        showLogo: true,
    },
};