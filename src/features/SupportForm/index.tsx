import { CSSProperties, FC } from "react";
import { Layout, Typography, Form, Input, Button, } from "antd";
import { useSupportForm } from "./reducer";
import { SendOutlined } from "@ant-design/icons";

const SupportForm: FC = () => {
    const { state, actions, messageContext } = useSupportForm()

    return (
        <>
            {messageContext}
            <Layout style={styles.layout}>
                <div style={state.isBigScreen ? styles.formContainer : {}}>
                    <div style={state.isBigScreen ? styles.responsiveContainer : {}}>
                        <Form ref={state.form} onFinish={(values: { support: string }) => actions.sendRequest(values.support)} layout="vertical">
                            <Layout.Header style={styles.header}>
                                <div style={styles.headerContainer}>
                                    <Typography.Title><span style={styles.blueColor}>Digi</span><span style={styles.goldColor}>s</span> <span style={styles.blueColor}>Support</span></Typography.Title>
                                </div>
                            </Layout.Header>
                            <Layout.Content style={styles.contentContainer}>
                                <Form.Item label={<Typography.Title level={4} >Explain us your problem</Typography.Title>} name="support">
                                    <Input.TextArea rows={7} placeholder="Write here..." />
                                </Form.Item>
                                <div style={styles.buttonContainer}>
                                    <Form.Item style={styles.buttonItem}>
                                        <Button loading={state.loading} style={styles.submitButton} type="primary" htmlType="submit" icon={<SendOutlined />}>Send</Button>
                                    </Form.Item>
                                </div>
                            </Layout.Content>
                        </Form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

type TStyles = {
    layout: CSSProperties
    formContainer: CSSProperties
    responsiveContainer: CSSProperties
    header: CSSProperties
    headerContainer: CSSProperties
    contentContainer: CSSProperties
    buttonContainer: CSSProperties
    blueColor: CSSProperties,
    goldColor: CSSProperties,
    buttonItem: CSSProperties,
    submitButton: CSSProperties,
}

const styles: TStyles = {
    layout: { backgroundColor: "white" },
    formContainer: { display: 'flex', justifyContent: 'center' },
    responsiveContainer: { width: '50vw' },
    header: { backgroundColor: "white", padding: '10px' },
    headerContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    contentContainer: { padding: '5px', marginTop: '1rem', },
    buttonContainer: { display: 'flex' },
    blueColor: { color: "#1057A4" },
    goldColor: { color: "#FDB400" },
    buttonItem: { flex: 1 },
    submitButton: { width: '100%', height: '3rem', fontSize: '18px' }
}

export default SupportForm