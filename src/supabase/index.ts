import { IP_DATA } from '../database/IP_DATA'
import { supabaseClient } from './supabaseClient'

async function main() {
  await supabaseClient.auth.signInWithPassword({
    email: process.env.SUPABASE_ADMIN_EMAIL!,
    password: process.env.SUPABASE_ADMIN_PASSWORD!,
  })

  await updateFranchise()

//   const all = await supabaseClient
//     .from('u1m-entities')
//     .select()
//     .eq('type', 'member')
}

async function updateFranchise() {
  const localData = IP_DATA
  const remoteData = (await supabaseClient
    .from('u1m-entities')
    .select()
    .eq('type', 'franchise')).data ?? []

  const upsertData: Record<string, string>[] = localData.map(f => ({
    type: 'franchise',
    label: f.title,
  }))

  upsertData
    .forEach((f) => {
      const remote = remoteData.find(r => r.label === f.label)
      if (remote) {
        f['uuid'] = remote.uuid // Use existing ID if it exists
      }
    })

  // Upsert all at once (insert or update by label)
  const upsertRes = await supabaseClient
    .from('u1m-entities')
    .upsert(upsertData, { onConflict: 'uuid' })

  console.log('Inserted franchises:', upsertRes)
}

main().then(() => {
  console.log('Done')
}).catch((err) => {
  console.error('Error:', err)
})
