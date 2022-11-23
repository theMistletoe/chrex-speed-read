/**
 * Kuromoji Util
 */

 import kuromoji, { Tokenizer, IpadicFeatures, TokenizerBuilder } from 'kuromoji';

 export default class KuromojiUtil {
   private constructor() {}
 
   public static getTokenizer(paramh: any): Promise<Tokenizer<IpadicFeatures>> {
     const builder: TokenizerBuilder<IpadicFeatures> =
       kuromoji.builder(paramh);
 
     return new Promise<Tokenizer<IpadicFeatures>>(done => {
       builder.build((err, tknzr) => {
         done(tknzr);
       });
     });
   }
 }