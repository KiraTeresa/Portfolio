import ContactForm from "../../components/Contact/ContactForm";
import ContactHead from "../../components/Contact/ContactHead";

function ContactPage() {
    return (
        <div className='container contact'>
            <ContactHead />
            <ContactForm />
        </div>
    )
}

export default ContactPage;