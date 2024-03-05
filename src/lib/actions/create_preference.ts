import axios from "axios";
import { PreferenceRequest, PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";


export interface MetadataPreference {
    user_id: string,
    user_email: string,
    product_id: string,
    product_title: string


}

export type PreferenceInputType = {
    title: string;
    descripcion: string;
    price: number;
    item_id: string;
    metadata: MetadataPreference
}
export const createPreferenceResponse = async ({ item_id, price, title, metadata, descripcion }: PreferenceInputType): Promise<PreferenceResponse> => {
    const body: PreferenceRequest = {
        metadata: metadata,
        auto_return: 'all',
        back_urls: {
            success: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://epdrago.com.ar`,
            failure: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://epdrago.com.ar`,
        },
        binary_mode: true,
        notification_url: "https://epdrago.com.ar/api/webhooks/payments",
        items: [
            {
                id: item_id,
                quantity: 1,
                title: title,
                unit_price: price,
            },
        ],
    };


    return (await axios.post('https://api.mercadopago.com/checkout/preferences', body, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`
        }
    })).data;
}