import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  const onSubmit = (data: any) => {
    console.log(data)
  }

  // @ts-ignore
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup >
              <Col span={24}>
                <Input
                  type="text"
                  name="Имя"
                  placeholder="Ваше имя"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {/*<ValidationType type="name" />*/}
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="Фамилия"
                  placeholder="Ваша фамилия"
                  value={values.lustName || ""}
                  onChange={handleChange}
                />
                <ValidationType type="lustName" />
              </Col>
              <Col span={24}>
                <Input
                    type="email"
                    name="Почта"
                    placeholder="Ваша почта"
                    value={values.email || ""}
                    onChange={handleChange}
                />
                {/*<ValidationType type="email" />*/}
              </Col>
              <Col span={24}>
                <Input
                    type="number"
                    name="Номер"
                    placeholder="Ваш номер"
                    value={values.number || ""}
                    onChange={handleChange}
                />
                <ValidationType type="number" />
              </Col>
              <ButtonContainer>
                <Button name="submit" >{t("Отправить")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
