---
aliases:
  - The language of math
tags:
  - section
---
# Contents

1. [[#Natural Languages]]
2. [[#Elements of Language]]
3. [[#Formal Languages and Grammars]]
4. [[#Math as a Language]]
5. [[#Glossary Of Symbols]]
6. [[#Conclusions]]
7. [[#Footnotes]]
# Natural Languages

Linguistics is the scientific field that studies language, it has many areas of study but it is more closely related to *human language*, which has a very different development and focus than *formal languages*, those are more closely related to the notions we try to describe, structured, specific and objective ideas, those who can be interpreted by our three laws, however, it is still useful to talk about our language and how it can be then shaped and shared with logic and mathematics.

Natural languages are any spoken or signed language that we humans use, and have evolved and changed over time, a lot of time in fact, nowadays we try to control languages to a certain degree, however, even despite our efforts to reduce complexity and ambiguity, natural languages are all over the place, they have many exceptions, inconsistencies, different and varying structures, and much more, all within a single dialect, these differences enrich our culture and make them natural, human to us, but they create some grave conflicts when applied to logic, as, something so minimal and conclusive can't be dealt with when so many different exceptions and rules vary.

# Elements of Language

Languages are a fundamental part of our lives, we communicate constantly and always have many reasons to do it, however, have we ever wondered how we could structure said communication to make it easier to understand and become better at sharing our ideas?

What we know is, a language must have a set of words, that we can pronounce, write or think about, these words are made up of symbols stringed together, knowing all those words doesn't tell us much but each one holds a meaning by itself, and if you put them together, they can produce an even greater meaning, although they have to be put in a certain manner or else none of it would make sense, at least, that's how much we know about them from our own living experience, and after dissecting our own language, some components become apparent.

A language can be divided in three main elements:
- ***Lexicon***: Described as a specific set[^1] of *words* or *strings* that are composed by an *alphabet* or a vocabulary. These strings composed of *symbols* are abstract objects by themselves, composed of different elements that together bring a common collection of words we can then append meaning to.
	- **Alphabet** (*Vocabulary*): A non-empty collection of independent, singular symbols, characters, glyphs or scribbles.
	- *String*: Also known as words, are concatenations or sequences of elements from an alphabet, albeit they can range from a single symbol to infinite, they are more complex representations given by our vocabulary.
	- *Symbol*: A written mark that conveys a specific idea by itself or the strings containing it.
		- Terminal: They *"terminate"*, as they cannot be replaced by any other symbols once written, they are only concerned about themselves.
		- Non-terminal: Using specific and well defined rules, these symbols can be replaced by other symbols, be them terminal or not, this way, utilizing determined symbols and rules, one can write said symbols, and then append more through the usage of said rules.
- ***Syntax***: Structured entities in our defined system that *express something*. It doesn't concern itself with the meaning, just that the structure of it is correct according to our defined rules and Lexicon.
	- Well-formed formulas (WFF): A finite sequence of symbols from a given alphabet, constructed using our defined rules, in this sense, anything written that follows said properties is, trivially, a well-formed formula.
- ***Semantics***: The meaning and interpretation that can be given to any WFF, where does it come from and what does it imply, how each symbol adds up for the entire formula to convey an idea.

An additional element can help us conceive the action of composing symbols into words depending on the type they belong to, as such:
- ***Production rules***: Methods for replacing non-terminal symbols with either terminal or non-terminal ones, so that, in each composition, we know how we could keep constructing longer words, if possible

We have abstracted our own language, something so natural and inherent in our lives, into smaller pieces that can define special characteristics and behaviors it has, but, another piece of information we glared over is, language is made by the people, for the people, it feels as if it might not be precise or definite, we know there exist exceptions and special cases, multiple semantic meanings and varying correct syntax, this ambiguity makes it difficult to coexist with something as exact as math, because we know it is formal, it must be exact, but what can we do restrict these languages so they can help us communicate math more effectively.
# Formal Languages and Grammars

Once we have understood the elements that a language has, we can then expand these terms and define them concretely through the usage of a more *formal* definition, that is, how can any of these definitions be useful in application to our first and most important system, Logic, since natural languages lack the conciseness and definiteness that math is all about, we can restrict and append parts to make it practical in communicating math concisely, we might have to invent new terms, symbols, rules and meanings, but in our way, we'll find that it could be useful to change and match these elements together.

Recalling back to our philosophy section, one important detail that is key to the world around us, is the notion of *formality*. Formalism, specially in mathematics, is a view that holds that well defined rules can help us reason correctly towards a valid result, the purpose of a language is to communicate, so, if we could show that our asserted ideas can be accurately described in statements that are definite, unambiguous, exact and precise, which follow a set of manipulation, transformation or *production* rules being applied to a Lexicon, that can be correct without considering the meaning they posses and can then be understood to convey an idea.

So, what is a formal language then? You might have already inferred some of its properties, if it is a language, there must be an alphabet over which we work with, that has some rules and symbols, we can know when it is correct and what every expression means.

However, if it is formal, it must be exact and definite, and with the description given before, we can already see that it can be formal if we restrict it correctly, and that those five elements are necessary to the language, but also, if we can restrict it as we desire and then test if it is useful, we can also say those elements are sufficient and see what result we can get.

A formal language thus, contains all results that these elements can give, but the conjunction of all these elements together isn't a language until they are applied, so if the language are the resulting formulas, then a grammar is just the structure of it, now we present the definition that will make everything clear.

A formal grammar is the set of elements that constitute a formal language, which can be expressed as $ $, where:
- $N$ is a finite set of non-terminal symbols.
- $T$ is a finite set of terminal symbols. ($N$ and $T$ must not share elements).
- $P$ is a finite set of production rules in which your symbols $\alpha$ and $\beta$ are symbols, not equal to the empty string, that can be transformed from $\alpha$ to $\beta$, i.e[^2] $\alpha\to\beta$.
- $S$ in $N$, is a specially designed start symbol.
# Math as a Language

Since we already know what a language is, even more so, a grammar, that results in the formulas contained within a formal language, we can start building our own statements, sentences and ways of communicating truth, useful on Logic, thus, we present a few common forms and production rules that are seen all throughout math, these are general abstractions of the specific formulas, without telling you precisely all the symbols they apply to, we'll learn them along the way and other forms of notation.

Non-terminal symbols will be represented by $\top$, they tell you when another symbol can be replaced there, Terminal symbols will use the letters $a$ and $b$, (and so on if necessary), they hold no value at this point, they're just *objects* that can be *related* with other objects through non-terminal symbols. Objects and relations are a nice interpretation we'll use intuitively for now.

General Form | Description |
:--: | :-- |
$a\top$ | 
$a\top b$ | Objects $a$ and $b$ are related by $\top$, this notion of *relation* will be explained in detail later, and is commonly used in relationships of objects, operations, mappings, functions, etc. |
$
# Glossary of Symbols

After having an index to check for common production rules, another question still remains unanswered, what symbols exist?

To answer this, sadly, we'll have to explore a broader scope that we cannot fully grasp yet, but that reveals an inherent truth about this section. These glossaries and lists, among with many others that will be common to find throughout this series, should be taken precisely as that, glossaries or indices pointing towards concise definitions, so these lists can be used as reference at any moment and are always present in the mind of the reader, not to be memorized immediately, but with practice, and always handy and accessible throughout any reading.

After stating the purpose of this glossary (as well as the previous one and many others in the future), here's the list of the most commonly seen mathematical (and by extent, logic) symbols.

Symbol | Description |
:--: | :-- |

# Conclusions


# Footnotes

[^1]: Whilst the term set is used loosely here to intuitively mean a collection of objects, we must not forget it is also a mathematical notion we still need to define, so don't overthink its meaning.

[^2]: i.e. is often used in mathematical texts, it can be understood as "That is", from the latin *id est*.
