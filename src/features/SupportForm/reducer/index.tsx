import { useState } from "react";
import { message as messageHook } from "antd";

export function useSupportForm() {
    const [message, messageContext] = messageHook.useMessage();
    const [loading, setLoading] = useState(false)

    const sendRequest = async (support: string) => {
        try {
            setLoading(true)
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ support }),
            }).then((response) => response.json());
            if (!res.success) throw new Error(res.message ?? 'Something went wrong!')
            message.info(res.message)
        } catch (error: any) {
            message.error(error?.message ?? 'Something went wrong!')
        } finally {
            setLoading(false)
        }
    }

    return {
        state: { loading },
        actions: { sendRequest },
        messageContext
    }
}