<template>
  <div>
    <Title>{{ $t("meta.title") }}</Title>

    <Head>
      <meta
        name="description"
        :content="
          $t('meta.description') || 'Default description for this page.'
        "
      />
    </Head>
  </div>
</template>
