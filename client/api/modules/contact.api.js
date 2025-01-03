import publicClient from "../client/public.client";
//import contactApi from "@/client/contactApi";

const contactEndpoints = {
    sendMail: `/contact`,
};

const contactApi = {
    sendMail: async (params = {}) => {
        try {
            const response = await publicClient.post(contactEndpoints.sendMail, params); // Pass params directly
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default contactApi;
