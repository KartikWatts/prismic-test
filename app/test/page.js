import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();

  const testDocs = await client.getAllByType("prismic_test_flag");

  console.log(testDocs);

  return (
    <div>
      {testDocs.map((doc) => {
        console.log(doc.data);
        return (
          <div key={doc.id} style={{ margin: "1rem" }}>
            <h2>
              For <i>`{doc.uid}`</i> Page:
            </h2>
            <pre>{JSON.stringify(doc.data)}</pre>
          </div>
        );
      })}
    </div>
  );
}
