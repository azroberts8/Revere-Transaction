import { FreshContext, Handlers } from "$fresh/server.ts";

const API_KEY: string = Deno.env.get("REVERE_API_KEY") || "";
const MERCHANT_ID: string = Deno.env.get("REVERE_MERCHANT_ID") || "";

export const handler: Handlers = {
    async POST(_req: Request, _ctx: FreshContext) {
        // Get the token from the tokenizer
        const { token } = await _req.json();

        const headers = new Headers();
        headers.append('Authorization', API_KEY);

        const body = {
            amounts: { requested_amount: 1 },
            billing_address: {
                city: "Newark",
                country: "US",
                email: "test@example.com",
                first_name: "John",
                last_name: "Smith",
                line_1: "1725 Slough Avenue",
                postal_code: "18505",
                subdivision: "PA"
            },
            currency: "USD",
            email_address: "test@example.com",
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