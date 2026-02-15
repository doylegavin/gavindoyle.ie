const { gavinDoylePersonSchema } = require('./src/schemas/personSchema.ts');

console.log('Validating Schema...\n');

try {
  // Basic structure validation
  const schema = gavinDoylePersonSchema;

  console.log('✅ Schema can be parsed as JavaScript');
  console.log('✅ Context:', schema['@context']);

  if (schema['@graph']) {
    console.log('✅ Using @graph structure (recommended)');
    console.log('✅ Graph contains', schema['@graph'].length, 'entities');

    schema['@graph'].forEach((entity, index) => {
      console.log(`\n📦 Entity ${index + 1}:`);
      console.log('   Type:', entity['@type']);
      console.log('   ID:', entity['@id']);

      // Check required fields for Person
      if (entity['@type'] === 'Person') {
        console.log('   Name:', entity.name ? '✅' : '❌ MISSING');
        console.log('   URL:', entity.url ? '✅' : '❌ MISSING');
        console.log('   Image:', entity.image ? '✅' : '❌ MISSING');
        console.log('   Description:', entity.description ? '✅' : '❌ MISSING');
        console.log('   sameAs links:', entity.sameAs?.length || 0);

        // Check for Wikidata
        const hasWikidata = entity.sameAs?.some(url => url.includes('wikidata.org'));
        console.log('   Wikidata:', hasWikidata ? '✅' : '⚠️  Not found');

        // Check for press articles
        console.log('   Press articles:', entity.subjectOf?.length || 0);
      }

      // Check required fields for Organization
      if (entity['@type'] === 'Organization') {
        console.log('   Name:', entity.name ? '✅' : '❌ MISSING');
        console.log('   URL:', entity.url ? '✅' : '❌ MISSING');
        console.log('   Founder:', entity.founder ? '✅' : '❌ MISSING');
        console.log('   sameAs links:', entity.sameAs?.length || 0);

        // Check for Wikidata and Crunchbase
        const hasWikidata = entity.sameAs?.some(url => url.includes('wikidata.org'));
        const hasCrunchbase = entity.sameAs?.some(url => url.includes('crunchbase.com'));
        console.log('   Wikidata:', hasWikidata ? '✅' : '⚠️  Not found');
        console.log('   Crunchbase:', hasCrunchbase ? '✅' : '⚠️  Not found');
      }
    });
  }

  // Convert to JSON to check for serialization issues
  const jsonString = JSON.stringify(schema);
  console.log('\n✅ Schema can be serialized to JSON');
  console.log('📊 Total size:', (jsonString.length / 1024).toFixed(2), 'KB');

  console.log('\n✅ No JavaScript errors detected');
  console.log('\n🎯 Next step: Test at https://search.google.com/test/rich-results');

} catch (error) {
  console.error('❌ ERROR:', error.message);
  process.exit(1);
}
