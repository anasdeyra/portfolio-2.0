import {
  Button,
  InputWrapper,
  Modal,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";

export default function ContactModal({ opened, close }) {
  function submit() {}

  return (
    <Modal title="Lets get in touch" onClose={close} opened={opened}>
      <form onSubmit={submit}>
        <Stack>
          <InputWrapper required label="Name" placeholder="John Doe">
            <TextInput required />
          </InputWrapper>
          <InputWrapper required label="Email" placeholder="your@email.com">
            <TextInput required type="email" />
          </InputWrapper>
          <InputWrapper
            required
            label="Message"
            placeholder="Let's work together"
          >
            <Textarea required />
          </InputWrapper>
          <Button
            radius={"md"}
            variant="gradient"
            gradient={{ from: "#FF416C", to: "#FF4B2B" }}
            type="submit"
          >
            Send
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
