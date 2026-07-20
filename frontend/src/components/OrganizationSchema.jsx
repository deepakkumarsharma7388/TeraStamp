const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TeraStamp",
    url: "https://www.terastamp.org",
    logo: "https://www.terastamp.org/og-logo.png",
    image: "https://www.terastamp.org/og-logo.png",
    description:
      "AI-powered Digital Twin and Infrastructure Monitoring Platform."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default OrganizationSchema;