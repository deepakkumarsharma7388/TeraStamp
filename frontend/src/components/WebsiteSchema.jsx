const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TeraStamp",
    alternateName: "TeraStamp Infrastructure Monitoring Platform",
    url: "https://www.terastamp.org",
    description:
      "AI-powered Digital Twin and Infrastructure Monitoring Platform for dams, tunnels, bridges, mining, transportation, construction, and smart infrastructure.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "TeraStamp",
      url: "https://www.terastamp.org",
    },
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

export default WebsiteSchema;