import languages from '../languages';

it('has "popular" and "all" languages', () =>
  expect(Object.keys(languages)).toEqual(['popular', 'all'])
);

it('has the correct format for all language options', () => {
  const all = languages.popular.concat(languages.all);

  all.forEach(language =>
    expect(Object.keys(language)).toEqual(['name', 'code', 'id'])
  );
});
