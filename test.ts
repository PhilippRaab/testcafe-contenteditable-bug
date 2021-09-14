import {fixture, Selector} from "testcafe";

fixture('App Fixture')
  .page('http://localhost:8000/');

test('Typetext on contenteditable plaintext-only', async (t) => {
  await t.typeText(Selector('.content-editable'), 'add');
  await t.typeText(Selector('.content-editable-plaintext'), 'add');

  await t.debug();
});
