import answers from "~/data/answers.json"
import texts from "~/data/texts.json"
import videos from "~/data/videos.json"
import dates from "~/data/dates.json"
const sources = [...texts, ...videos];
const people = {
  JV: 'Joe Vaninetti', BL: 'Bob Lazar', GH: 'Gene Huff', GK: 'George Knapp', JL: 'John Lear', JT: 'Jim Tagliani',
  LK: 'Layne Keck', BG: 'Billy Goodman', TT: 'Terry Tavernetti', DM: 'Dennis Mariani', ET: 'Edward Teller'
}
export default defineAppConfig({
  answers,
  texts,
  videos,
  dates: dates.map(date => {
    return {
      ...date,
      participants: date.participants.map(p => people[p]),
      sources: date.sources.map(source => sources.find(s => s.file === source))
    }
  })
})
