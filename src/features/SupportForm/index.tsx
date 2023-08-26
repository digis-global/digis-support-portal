import { CSSProperties, FC } from "react";
import { Layout, Typography, Form, Input, Button } from "antd";
import { useSupportForm } from "./reducer";

const SupportForm: FC = () => {
    const { state, actions, messageContext } = useSupportForm()

    return (
        <>
            {messageContext}
            <Layout style={{ backgroundColor: 'white' }}>
                <div style={state.isBigScreen ? styles.formContainer : {}}>
                    <div style={state.isBigScreen ? styles.responsiveContainer : {}}>
                        <Form onFinish={(values: { support: string }) => actions.sendRequest(values.support)} layout="vertical">
                            <Layout.Header style={styles.header}>
                                <div style={styles.headerContainer}>
                                    <Typography.Title><span style={styles.blueColor}>Digi</span><span style={styles.goldColor}>s</span> <span style={styles.blueColor}>Support</span></Typography.Title>
                                </div>
                            </Layout.Header>
                            <Layout.Content style={styles.contentContainer}>
                                <Form.Item label="Explain us your problem" name="support">
                                    <Input.TextArea rows={7} />
                                </Form.Item>
                                <div style={styles.buttonContainer}>
                                    <Form.Item>
                                        <Button loading={state.loading} type="primary" htmlType="submit">Send</Button>
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
    formContainer: CSSProperties
    responsiveContainer: CSSProperties
    header: CSSProperties
    headerContainer: CSSProperties
    contentContainer: CSSProperties
    buttonContainer: CSSProperties
    blueColor: CSSProperties,
    goldColor: CSSProperties,
}

const styles: TStyles = {
    formContainer: { display: 'flex', justifyContent: 'center' },
    responsiveContainer: { width: '50vw' },
    header: { backgroundColor: "white", padding: '10px' },
    headerContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    contentContainer: { padding: '5px', marginTop: '1rem', },
    buttonContainer: { display: 'flex', justifyContent: 'flex-end' },
    blueColor: { color: "#1057A4" },
    goldColor: { color: "#FDB400" }
}

export default SupportForm