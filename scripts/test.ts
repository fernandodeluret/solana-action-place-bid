const test = async () => {
  const url = `http://localhost:3000/api/actions/place-bid?auction=5nptXbdapZvKFu84QARGar9QnCXQYjc4YovA3cjyjSit&amount=10`
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account: 'AdwjRqjdaaT5wPQdaiB8kaN8oz6x346gur4cuWEaGf2y',
      }),
    },
  );

  const payload = await res.json();
  console.log(payload)

}

test().then(() => console.log('ok')).catch(e => console.log(e))