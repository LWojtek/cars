export default async ({ store }) => {
  await store.dispatch('getCarsData');
}
