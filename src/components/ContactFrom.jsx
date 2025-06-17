import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Form = styled.form`
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #cfe776;
  /* background-color: #424242; */
`;

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: "#cfe776";
`;

const Input = styled.input`
  padding: 10px;
  border: ${({ isError }) =>
    isError ? "1px solid #ff8282" : "1px solid #cfe776"};
  border-radius: 8px;
  background-color: #353535;
  color: white;
  &:focus {
    outline: none;
    border: 1px solid #b076e7;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: ${({ isError }) =>
    isError ? "1px solid #ff8282" : "1px solid #cfe776"};
  border-radius: 8px;
  resize: vertical;
  background-color: #353535;
  color: #fff;
  &:focus {
    outline: none;
    border: 1px solid #b076e7;
  }
`;

const ErrorMsg = styled.div`
  color: #ff8282;
  font-size: 14px;
  margin-top: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  appearance: none;
  -webkit-appearance: none;
  background-color: contain;
  border: 1px solid #cfe776;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:checked {
    background-color: #b076e7;
  }

  &:focus {
    outline: none;
  }
`;

const ConsentLabel = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubmitBtn = styled.button`
  padding: 12px;
  background-color: #cfe776;
  color: #353535;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #b076e7;
  }
`;

const ContactForm = () => {
  const form = useRef();
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    website: "",
    sns: "",
    message: "",
    topic: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "topic") {
      setFormData((prev) => {
        const updatedTopics = checked
          ? [...prev.topic, value]
          : prev.topic.filter((item) => item !== value);
        return { ...prev, topic: updatedTopics };
      });

      if (errors.topic && checked) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.topic;
          return updated;
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name] && value.trim() !== "") {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    }
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.company.trim()) newErrors.company = true;
    if (!data.name.trim()) newErrors.name = true;
    if (!data.phone.trim()) newErrors.phone = true;
    if (!data.email.trim()) newErrors.email = true;
    if (data.topic.length === 0) newErrors.topic = true;
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0 || !agree) {
      if (!agree) alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("신청이 완료되었습니다!");
        form.current.reset();
        setFormData({
          company: "",
          name: "",
          phone: "",
          email: "",
          website: "",
          sns: "",
          message: "",
          topic: [],
        });
        setErrors({});
        setAgree(false);
      })
      .catch((error) => {
        alert("전송 중 오류가 발생했습니다: " + error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <FieldWrap>
        <Label isError={errors.company}>
          {!formData.company.trim()
            ? "기업명 / 브랜드명 *"
            : "기업명 / 브랜드명"}
        </Label>
        <Input
          type="text"
          name="company"
          maxLength={50}
          value={formData.company}
          onChange={handleChange}
          isError={errors.company}
          placeholder="ex) Concent9"
        />
        {errors.company && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
      </FieldWrap>

      <FieldWrap>
        <Label isError={errors.name}>
          {!formData.name.trim() ? "성함 / 직함 *" : "성함 / 직함"}
        </Label>
        <Input
          type="text"
          name="name"
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
          isError={errors.name}
          placeholder="ex) 안은진 / 대표"
        />
        {errors.name && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
      </FieldWrap>

      <FieldWrap>
        <Label isError={errors.phone}>
          {!formData.phone.trim() ? "연락처 *" : "연락처"}
        </Label>
        <Input
          type="text"
          name="phone"
          maxLength={20}
          value={formData.phone}
          onChange={handleChange}
          isError={errors.phone}
          placeholder="ex) 010-0000-0000"
        />
        {errors.phone && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
      </FieldWrap>

      <FieldWrap>
        <Label isError={errors.email}>
          {!formData.email.trim() ? "이메일 주소 *" : "이메일 주소"}
        </Label>
        <Input
          type="email"
          name="email"
          maxLength={100}
          value={formData.email}
          onChange={handleChange}
          isError={errors.email}
          placeholder="ex) concent9.inc@gmail.com"
        />
        {errors.email && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
      </FieldWrap>

      <FieldWrap>
        <Label>웹사이트 / 스토어 URL</Label>
        <Input
          type="text"
          name="website"
          maxLength={200}
          value={formData.website}
          onChange={handleChange}
          placeholder="ex) 보유 시 기입"
        />
      </FieldWrap>

      <FieldWrap>
        <Label>SNS 계정 링크</Label>
        <Input
          type="text"
          name="sns"
          maxLength={200}
          value={formData.sns}
          onChange={handleChange}
          placeholder="ex) 인스타그램, 유튜브, 블로그 등"
        />
      </FieldWrap>

      <FieldWrap>
        <Label isError={errors.topic}>
          {formData.topic.length === 0 ? "문의 주제 *" : "문의 주제"}
        </Label>
        <CheckboxGroup>
          {[
            "브랜드 런칭/리브랜딩",
            "스마트스토어 구축",
            "자사몰 구축",
            "상세페이지/콘텐츠 제작",
            "전반적인 A to Z 실행",
            "기타",
          ].map((topic) => (
            <CheckboxLabel key={topic}>
              <StyledCheckboxInput
                name="topic"
                value={topic}
                checked={formData.topic.includes(topic)}
                onChange={handleChange}
              />
              {topic}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
        {errors.topic && <ErrorMsg>하나 이상 선택해주세요</ErrorMsg>}
      </FieldWrap>

      <FieldWrap>
        <Label>문의 내용</Label>
        <Textarea
          name="message"
          rows="6"
          maxLength={2000}
          value={formData.message}
          onChange={handleChange}
          placeholder="최대 2000자까지 입력 가능"
        />
      </FieldWrap>

      <ConsentLabel>
        <StyledCheckboxInput
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        {agree
          ? "개인정보 수집 및 이용에 동의합니다."
          : "개인정보 수집 및 이용에 동의합니다. *"}
      </ConsentLabel>
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <SubmitBtn type="submit">신청하기</SubmitBtn>
    </Form>
  );
};

export default ContactForm;
