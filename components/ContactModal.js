import {
  Button,
  InputWrapper,
  Modal,
  Stack,
  Textarea,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";

export default function ContactModal({ opened, close }) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function sendmail(values) {
    setIsLoading(true);
    var data = {
      service_id: "service_kx1mdve",
      template_id: "template_5pevrdg",
      user_id: "OVm5QfqgDPzcq2VeH",
      template_params: {
        from_name: values.name,
        to_name: "Anass",
        message: values.message,
        reply_to: values.email,
      },
    };
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(function () {
        showNotification({
          id: "emailSuccess",
          message:
            "Thank you for reaching out and I will reply i soon as possible.",
          title: <Text weight={500}>Message sent successfully!</Text>,
          disallowClose: false,
          autoClose: 10000,
          color: "green",
        });
        close();
      })
      .catch(function (error) {
        showNotification({
          id: "emailError",
          message: "Sorry for that, try sendding an email instead :D.",
          title: (
            <Text weight={500}>There was a problem sending your message!</Text>
          ),
          disallowClose: false,
          autoClose: 10000,
          color: "red",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Modal title="Lets get in touch" onClose={close} opened={opened}>
      <form onSubmit={form.onSubmit(sendmail)}>
        <Stack>
          <InputWrapper required label="Name" placeholder="John Doe">
            <TextInput {...form.getInputProps("name")} required />
          </InputWrapper>
          <InputWrapper required label="Email" placeholder="your@email.com">
            <TextInput {...form.getInputProps("email")} required type="email" />
          </InputWrapper>
          <InputWrapper
            required
            label="Message"
            placeholder="Let's work together"
          >
            <Textarea {...form.getInputProps("message")} required />
          </InputWrapper>
          <Button
            radius={"md"}
            variant="gradient"
            gradient={{ from: "#FF416C", to: "#FF4B2B" }}
            type="submit"
            loading={isLoading}
          >
            Send
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
