import Processer from './processer_hash.js'

async function main() {
  const p = new Processer()
  await p.init()
  p.train()
  await p.save()
}

main()