import { useRef, useState } from "react";
import { message as messageHook, FormInstance } from "antd";
import { useMediaQuery } from 'react-responsive'

export function useSupportForm() {
    const [message, messageContext] = messageHook.useMessage();
    const [loading, setLoading] = useState(false)
    const isBigScreen = useMediaQuery({ query: '(min-width: 648px)' })
    const form = useRef<FormInstance<{ support: string }>>(null)


    const sendRequest = async (support: string) => {
        try {
            setLoading(true)
            message.open({
                key: 'alert',
                type: 'loading',
                content: 'Sending Email...'
            })
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ support }),
            }).then((response) => response.json());
            if (!res.success) throw new Error(res.message ?? 'Something went wrong!')
            message.open({
                key: 'alert',
                type: "success",
                content: res.message,
                duration: 2,
            })
            form.current?.resetFields()
        } catch (error: any) {
            message.open({
                key: 'alert',
                type: "error",
                content: error?.message ?? 'Something went wrong!',
                duration: 2,
            })
        } finally {
            setLoading(false)
        }
    }

    return {
        state: { loading, isBigScreen, form },
        actions: { sendRequest },
        messageContext
    }
}