import { FreshContext, Handlers } from "$fresh/server.ts";

const API_KEY: string = Deno.env.get("REVERE_API_KEY") || "";
const MERCHANT_ID: string = Deno.env.get("REVERE_MERCHANT_ID") || "";

export const handler: Handlers = {
    async POST(_req: Request, _ctx: FreshContext) {
        // Get the token from the tokenizer
        const {
            city,
            country,
            email,
            fname,
            lname,
            address1,
            address2,
            zipcode,
            state,
            amount,
            token
        } = await _req.json();

        const headers = new Headers();
        headers.append('Authorization', API_KEY);

        const body = {
            amounts: { requested_amount: Number(amount) },
            billing_address: {
                city: city,
                country: country,
                email: email,
                first_name: fname,
                last_name: lname,
                line_1: address1,
                line_2: address2,
                postal_code: zipcode,
                subdivision: state
            },
            currency: "USD",
            email_address: email,
            email_recipt: true,
            processor_id: "4af239fb-2b93-44fa-9bae-c68a6e76ea9f",
            payment_details: {
                token: token
            },
            source: "hub",
            type: "sale"
        };

        const requestOptions: RequestInit = {
            method: "POST",
            headers: headers,
            redirect: "follow",
            body: JSON.stringify(body)
        }

        const response = await fetch(`https://api.sandbox.reverepayments.dev/api/v1/groups/${MERCHANT_ID}/transaction`, requestOptions)
            .then(res => res.json())
            .catch(err => { return {
                error: err
            }});

        return new Response(JSON.stringify(response));
    }
}