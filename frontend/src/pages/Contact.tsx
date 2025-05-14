import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 60px 40px;
  font-family: 'Arial', sans-serif;
  color: #000;
  background: #fff;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 40px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: 600;
  }
`;

const Form = styled.form`
  flex: 2;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FullWidthInput = styled(Input)`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #444;
  }
`;

const Message = styled.p<{ success?: boolean }>`
  color: ${({ success }) => (success ? "green" : "red")};
  font-size: 14px;
  margin-bottom: 16px;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    user: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    // Combine firstName and lastName into a single "name" field
    const contactData = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`, // Create full name
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000"; // Default for local development
      await axios.post(`${apiUrl}/api/contact`, contactData, {
        headers: { "Content-Type": "application/json" },
      });

      setSubmitSuccess(true);
      setFormData({
        user: "1",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error: any) {
      setSubmitError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <LeftColumn>
        <h1>CONTACT</h1>
        <p><strong>Phone:</strong> +91 70489 24351</p>
        <p><strong>Email:</strong> aashu@aashiguptadesigns.com</p>
      </LeftColumn>

      <Form onSubmit={handleSubmit}>
        {submitSuccess && <Message success>Message sent successfully!</Message>}
        {submitError && <Message>{submitError}</Message>}

        <InputRow>
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </InputRow>

        <FullWidthInput
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FullWidthInput
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <FullWidthInput
          type="text"
          name="address"
          placeholder="Site Location"
          value={formData.address}
          onChange={handleChange}
        />

        <Textarea
          name="message"
          placeholder="Write a message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></Textarea>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
