export const DEPLOY_URL = 'http://localhost:3000'

export const API_URL = 'http://localhost:4000/api'

export type ProductsResponse = {
    products: Product[];
    metadata: Metadata;
}

export type StylesResponse = {
    styles: ProductStyle[];
    metadata: Metadata;
}

export type Metadata = {
    current_page: number;
    page_size: number;
    first_page: number;
    last_page: number;
    total_records: number;
}

export type Product = {
    id: number;
    product_title: string;
    product_description: string;
    style: string;
    available_sizes: string;
    brand_logo_image: string;
    thumbnail_image: string;
    color_swatch_image: string;
    product_image: string;
    spec_sheet: string;
    price_text: string;
    suggested_price: string;
    category_name: string;
    subcategory_name: string;
    color_name: string;
    color_square_image: string;
    color_product_image: string;
    color_product_image_thumbnail: string;
    size: string;
    piece_weight: string;
    piece_price: string;
    dozens_price: string;
    case_price: string;
    price_group: string;
    case_size: string;
    inventory_key: string;
    size_index: string;
    sanmar_mainframe_color: string;
    mill: string;
    product_status: string;
    companion_style?: string;
    msrp: string;
    map_pricing?: string;
    front_model_image_url: string;
    back_model_image_url: string;
    front_flat_image_url: string;
    back_flat_image_url: string;
    product_measurements: string;
    pms_color?: string;
    gtin: string;
    decoration_spec_sheet: string;
}

export type ProductStyle = {
    id: string;
    product_title: string;
    product_description: string;
    available_sizes: string;
    brand_logo_image: string;
    thumbnail_image: string;
    color_swatch_image: string;
    product_image: string;
    spec_sheet: string;
    price_text: string;
    suggested_price: string;
    category_name: string;
    subcategory_name: string;
    color_name: string;
    color_square_image: string;
    color_product_image: string;
    color_product_image_thumbnail: string;
    sizes: string;
    inventory_key: string;
    size_index: string;
    sanmar_mainframe_color: string;
    mill: string;
    product_status: string;
    companion_style?: string;
    msrp: string;
    map_pricing?: string;
    front_model_image_url: string;
    back_model_image_url: string;
    front_flat_image_url: string;
    back_flat_image_url: string;
    product_measurements: string;
    pms_color?: string;
    gtin?: string;
    decoration_spec_sheet: string;
    data?: any;
}