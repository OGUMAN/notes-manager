<template>
  <div>
    <Title>{{ $t("meta.title") }}</Title>

    <Head>
      <title>{{ $t("meta.title") || "Default Page Title" }}</title>
      <meta
        name="description"
        :content="
          $t('meta.description') || 'Default description for this page.'
        "
      />

      <!-- Open Graph meta tags for social sharing -->
      <meta
        property="og:title"
        :content="$t('meta.title') || 'Default Page Title'"
      />
      <meta
        property="og:description"
        :content="
          $t('meta.description') || 'Default description for this page.'
        "
      />
      <meta property="og:type" content="website" />

      <!-- Optional: Twitter meta tags -->
      <meta
        name="twitter:title"
        :content="$t('meta.title') || 'Default Page Title'"
      />
      <meta
        name="twitter:description"
        :content="
          $t('meta.description') || 'Default description for this page.'
        "
      />
    </Head>
  </div>
</template>
