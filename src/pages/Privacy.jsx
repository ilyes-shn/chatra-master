import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <motion.div
      className="contactPage mt-36 mx-20 md:px-7 px-2"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <h1 className="text-xl font-bold">Privacy policy</h1>
        <p>
          We respect your personal data. That’s why we’ve created a
          straightforward Privacy Policy explaining what information we collect
          when you visit cleveroad.com or communicate with us by any means
          (including email, phone, messengers, and more). The Privacy Policy
          reveals how you control the collected information, how we use this
          data, and how to contact us. It also describes what measures we take
          to protect your data.
        </p>
        <p>Why do we collect personal information?</p>
        <p>
          24 Design Company collects information to offer better services to
          clients.
        </p>
        <p>Generally, we collect information for marketing purposes.</p>
        <p>
          If you leave a contact request or send us an email, we’ll collect and
          process your data based on your requests. In this case, we’ve a
          legitimate interest in building client relationships with you. We can
          also contact you to find out if there’s a business opportunity for our
          cooperation. It’s done based on the legitimate interest to follow
          marketing practices and build client relationships with you. If you
          subscribe to our blog, we’ll send you emails with our new articles,
          achievements, and relevant tech trends. We tend to personalize our
          emails based on your personal information to make them more useful. We
          add your personal data and information about your company that we
          receive from you through a website or by email to our CRM system. We
          analyze it for marketing purposes. We have a legitimate interest in
          knowing our client’s profile. If you no longer want us to process your
          personal data, you should contact us in any convenient way and inform
          us about your intention. Also, you can unsubscribe from our
          communications by clicking the Unsubscribe button under any email you
          receive from us. Mind that after clicking the Unsubscribe button, we
          don’t delete your data automatically. You need to request us to do so
          by sending an email to the address above. What personal information do
          we collect? We may collect, store, and use the following personal
          information: Data you provide filling in personal information on our
          website like your name, email address, company name, title, and
          country. Information we receive when you use cleveroad.com, such as IP
          address, geographical location, browser type and version, operating
          system, referral source, length of visit, page views, and website
          navigation paths. Information you give us to subscribe to our email
          notifications and/or newsletters (including name and email address).
          Data you give us applying for the job with your CV and any additional
          information by oral or written means. We may collect, store, and use
          the following personal information: Race or ethnicity Religious or
          philosophical beliefs Sexual orientation Information about your health
          How do we use the collected information? We may use your personal
          information to: Personalize our website for you Administer our website
          and business Send statements, invoices or payment reminders to you,
          and collect payments from you Send you non-marketing commercial
          communications Send you emails that you requested Send you blog
          newsletters if you subscribe Send you our newsletters that you
          requested (you can unsubscribe at any time) Send you marketing
          communications related to our business or the businesses of selected
          third parties which we think may be interesting for you (you can
          inform us at any time if you no longer want to receive marketing
          communications) We proceed only with the information received from you
          through a website or by email. We’ll use that information in
          accordance with the permission you grant to us. Who has access to your
          personal information? We may share your personal data with our
          employees if it’s necessary for the purposes described in this policy.
          We may share your personal information with any member of our group of
          companies (this means our subsidiaries, our ultimate holding company,
          and its subsidiaries) if it’s necessary for the purposes described in
          this policy. We also share data with the service providers and
          third-party vendors who perform functions on our behalf (website
          management, hosting, tech support, and marketing analysis). There are
          some other cases when we can share your data: To the extent that’s
          required by law In connection with any ongoing or prospective legal
          proceeding To establish, exercise, or defend our legal rights
          (including providing information to others for fraud prevention) Do we
          update this Privacy Policy? We may update this policy from time to
          time by publishing a new version on our website. You should check this
          page occasionally to ensure you’re happy with any changes to this
          policy. We may notify you of changes to this policy by email.
        </p>
      </div>
    </motion.div>
  );
};

export default Privacy;
