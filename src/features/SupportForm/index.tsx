import { CSSProperties, FC } from "react";
import { Layout, Typography, Form, Input, Button } from "antd";

const SupportForm: FC = () => {
    return (
        <Layout>
            <Form onFinish={(values: { support: string }) => console.log('values', values)} layout="vertical">
                <Layout.Header style={{ backgroundColor: "white", padding: '10px' }}>
                    <div style={styles.headerContainer}>
                        <Typography.Title><span style={{ color: "#1057A4" }}>Digi</span><span style={{ color: "#FDB400" }}>s</span> <span style={{ color: "#1057A4" }}>Support</span></Typography.Title>
                    </div>
                </Layout.Header>
                <Layout.Content style={{ padding: '5px', marginTop: '1rem', backgroundColor: 'white' }}>
                    <Form.Item label="Explain us your problem" name="support">
                        <Input.TextArea rows={7} />
                    </Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Send</Button>
                        </Form.Item>
                    </div>
                </Layout.Content>
            </Form>
        </Layout>
    )
}

type TStyles = {
    headerContainer: CSSProperties
}

const styles: TStyles = {
    headerContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
}

export default SupportForm