import type { Ox3Word } from "@/data/oxford3000";

export type WordExample = {
  en: string;
  bn: string;
  formulaNo: number;
  formulaName: string;
};

function primaryPos(pos: string): string {
  const first = pos.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.replace(/\.$/, "");
}

function primaryBn(bn: string): string {
  if (!bn) return "";
  const first = bn.split(/[,;/।]/)[0]?.trim() ?? bn;
  return first;
}

/**
 * প্রতিটা শব্দের জন্য একটা সহজ, ৩০-Formula-এর মধ্যে থাকা বাক্য তৈরি করে।
 * সব বাক্যেই Oxford 3000-এর সবচেয়ে common শব্দ ব্যবহার হয় (I, you, this, have, is, every day…)
 */
export function buildFormulaExample(word: Ox3Word): WordExample | null {
  const pos = primaryPos(word.pos);
  const w = word.w;
  const bn = primaryBn(word.bn);

  switch (pos) {
    case "n":
      // Formula 1: Subject + Verb + Object
      return {
        en: `I have a ${w}.`,
        bn: `আমার একটি ${bn} আছে।`,
        formulaNo: 1,
        formulaName: "Subject + Verb + Object",
      };

    case "v":
      // Formula 3: Present Simple (habit)
      return {
        en: `I ${w} every day.`,
        bn: `আমি প্রতিদিন ${bn}।`,
        formulaNo: 3,
        formulaName: "Present Simple (অভ্যাস)",
      };

    case "adj":
      // Formula 2: Subject + be + Complement
      return {
        en: `This is very ${w}.`,
        bn: `এটি খুব ${bn}।`,
        formulaNo: 2,
        formulaName: "Subject + be + Adjective",
      };

    case "adv":
      // Formula 1 + Adverb
      return {
        en: `She works ${w}.`,
        bn: `সে ${bn}ভাবে কাজ করে।`,
        formulaNo: 3,
        formulaName: "Subject + Verb + Adverb",
      };

    case "prep":
      return {
        en: `The book is ${w} the table.`,
        bn: `বইটি টেবিলের ${bn}।`,
        formulaNo: 0,
        formulaName: "Preposition ব্যবহার",
      };

    case "conj":
      return {
        en: `I am tired, ${w} I am happy.`,
        bn: `আমি ক্লান্ত, ${bn} আমি খুশি।`,
        formulaNo: 0,
        formulaName: "Connector ব্যবহার",
      };

    case "modal v":
    case "modal":
      // Formula 6: Modal Verb
      return {
        en: `I ${w} do it.`,
        bn: `আমি এটা ${bn} পারি/উচিত।`,
        formulaNo: 6,
        formulaName: "Subject + Modal + Verb",
      };

    case "pron":
      return {
        en: `${capitalize(w)} is here.`,
        bn: `${bn} এখানে আছে।`,
        formulaNo: 2,
        formulaName: "Subject + be",
      };

    case "det":
      return {
        en: `${capitalize(w)} book is good.`,
        bn: `${bn} বইটি ভালো।`,
        formulaNo: 2,
        formulaName: "Determiner + Noun + be",
      };

    case "number":
      return {
        en: `I have ${w} books.`,
        bn: `আমার ${bn}টি বই আছে।`,
        formulaNo: 1,
        formulaName: "Subject + Verb + Number + Noun",
      };

    case "exclam":
      return {
        en: `${capitalize(w)}! That is nice.`,
        bn: `${bn}! এটা সুন্দর।`,
        formulaNo: 2,
        formulaName: "Exclamation + Sentence",
      };

    default:
      return {
        en: `I know the word "${w}".`,
        bn: `আমি "${bn}" শব্দটি জানি।`,
        formulaNo: 1,
        formulaName: "Subject + Verb + Object",
      };
  }
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
