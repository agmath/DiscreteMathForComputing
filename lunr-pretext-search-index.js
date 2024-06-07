var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  This book is freely available online.   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "About This Text",
  "body": " About This Text  This text is currently in development and all of it is subject to change. A very rough draft version is being prepared with high-priority sections during the Summer of 2022. We expect to release a first stable version for September 2024.  This interactive text was designed for use in a first-year course in Discrete Mathematics at Southern New Hampshire University. The course is designed for students taking a first semester of discrete mathematics in conjunction with an introductory programming course. Discrete mathematics content is introduced in time for it to be utilized in the corrsponding programming class.  At Southern New Hampshire University, first-semester Computer Science students take CS113 (an introductory course in C++) and also traditionally took a course in Discrete Mathematics designed for general education purposes. In 2020, this Discrete Mathematics course was phased out and was replaced by a Discrete Mathematics for Computing course. Topics from the original Discrete Mathematics course were rearranged such that they are covered in time to be used in the CS113 class. Because the course is advertised as a mathematics for computing course, connections are explicitly made between mathematics and programming concepts.  Since the course has been developed, students majoring in Information Technology and students majoring in Game Programming have been encouraged by their major faculty to enroll as well. Those programs utilize Python and C#, respectively, in their first-semester coursework. For these reasons, we've attempted to build the Discrete Mathematics for Computing course (and this accompanying text) as \"language agnostic\" experiences.   "
},
{
  "id": "sec_firstch-intro",
  "level": "1",
  "url": "sec_firstch-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction   Humans devised a base-10 number system simply because the species evolved with 10 fingers. We could have used any other base-system -- in fact, some ancient civilizations did. The ancient Sumerians and Babylonians (3000BCE and 2000BCE, respectively) used base-60, while the Mayans and Aztecs adopted base-20 (circa 1400CE and 1500CE, respectively). The Alaskan Iñupak as well as the Eskimo-Aleut languages all include a base-20 numeral system in their current forms.  What's so special about base-10, base-20, or base-60? The Babylonians are credited with developing the concept of a 24-hour day, with each hour broken into 60-minutes and each minute broken into 60-seconds. The number 60 was attractive because it had many factors . The numbers 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 all divide evenly into 60. This meant that working in base-60 often made fractions easy to work with. One conjectured reason that the Mayans utilized a Base-20 system is that they lived in a warm climate, where they simply didn't wear shoes. Having their toes exposed meant an additional set of 10 digits readily available for counting.  Perhaps not [currently] qualifying as a civilization, but an important component of our lives nonetheless are machines -- more specifically, computers. Computers don't have the advantage, nor the awareness, of fingers or toes. They're simply aware of the presence or absence of electrical pulses. Because of this, it is natural for them to process and store information in a base-2 system -- a system more commonly known as binary .   "
},
{
  "id": "sec_firstch-b2ten",
  "level": "1",
  "url": "sec_firstch-b2ten.html",
  "type": "Section",
  "number": "1.2",
  "title": "Converting from Non-Standard Bases into Base-10",
  "body": " Converting from Non-Standard Bases into Base-10  Before discussing a strategy for converting from non-standard bases back to the base-10 (decimal) system, it is worth considering how counting in the decimal system works. Have you ever considered what the number 927 really means? Below is an insightful expansion.   Explicit Base-10 Expansion  Below is the explicit base-10 expansion of the integer 927.    The example above highlights the role of place-value in any number system, not just our own decimal system. The place of the digit determines the power of the base which it is attached to. The rightmost digit, perhaps you've referred to it as the singles digit, is attached to the power of the base. The second digit from the right is attached to the power of the base. With each successive position (towards the left) the digit is attached to an increasing power of the relevant base.   Explicit Base-10 Expansion  Use your knowledge of place-value to explicitly write the integer as the sum of its base-10 components.   Base-10 Place Value  Use your knowledge of place-value to answer the following.   Numbers in Non-Standard Bases  Let's shift away from our standard base-10 number system (commonly referred to as the decimal system), and think about representing values in other bases. The discussion about place-value in the previous section gives us all of the tools we need.  Given a base (with ) and digits with , the number represents the value . For example, the number is the value .  The definition above gives us a simple method for converting numbers represented in any non-standard base into their decimal representations. We need only write out their expansions in the provided base, and then simplifly using our familiar operations. For example, the decimal representation of is . You can verify this from the expansion in the previous paragraph. Let's try some examples below.  Convert to Base-10  Use your knowledge of place-value to answer the following.   Convert to Base-10  Use your knowledge of place-value to answer the following.   Convert to Base-10  Use your knowledge of place-value to answer the following.   Convert to Base-10  Use your knowledge of place-value to answer the following.    Common Number Systems  Beyond our own base-10 (decimal) number system, there are others that are quite common. In particular, base-2 (binary), base-8 (octal), and base-16 (hexadecimal) are popular. Let's explore those number systems a bit further.  In the previous subsection, we identified how number systems in different bases work, and highlighted how it is just a generalization of representing numbers using our common decimal system. From that discussion, we see that the binary system utilizes only two digits, 0 and 1, and place-values are attached to increasing powers of 2 as we move towards the left. These bi nary dig its are often referred to as bits . Moving to the octal system, we can deduce that it utilizes eight digits, 0 through 7, and that place-values are determined by increasing powers of 8 as we move towards the left.  The understanding above extends to hexadecimal, but creates a small problem. We've run out of digits to use. Indeed, the hexadecimal system will utilize sixteen unique digits. To accommodate this, we'll utilize 0 through 9 as usual, but then include through to represent the quantites 10 - 15, as we know them. Why can't we use 10 - 15 to represent themselves? If we did so, the encoding becomes ambiguous. For example, do we mean or do we mean ? Making use of the characters through prevents this ambiguity. The correct hexadecimal encoding of would be . We'll discuss more on how to make this conversion in the next section.   Conclusion  In this section we've seen that numbers can be written in a variety of bases. In particular, any positive integer can serve as the base for a number system. For bases larger than 10, we run out of our (familiar) digits, and need to include symbols to represent larger quanitities -- like using the characters through to represent 10 - 15 in the hexadecimal system.  In order to understand quantities written in different bases, we often need to convert them back to the decimal system (base-10). This is because we don't commonly work in those non-standard base-systems and have little intuition for them. We can exploit what we know about *place-value* in converting from a known non-standard base into the corresponding decimal value. The equation below describes the conversion.   There are several non-standard bases which are commonly utilized in computing. In particular, it is not surprising to encounter the binary, octal, or hexadecimal systems. Binary is commonly encountered because computers think in terms of the presence or absence of an electrical signal. Recognizing that there are only two observable states shows why we are limited to two digits. Binary encodings can be quite long and cumbersome, grouping bits together can reduce the \"length\" of an encoding. For example, grouping every three consecutive bits together results in an octal encoding whole grouping every four consecutive bits together results in a hexadecimal encoding. It is very fast to switch between any of these three number systems because of this relationship.   "
},
{
  "id": "int-expansion-ex",
  "level": "2",
  "url": "sec_firstch-b2ten.html#int-expansion-ex",
  "type": "Example",
  "number": "1.2.1",
  "title": "Explicit Base-10 Expansion.",
  "body": " Explicit Base-10 Expansion  Below is the explicit base-10 expansion of the integer 927.   "
},
{
  "id": "sec_firstch-b2ten-3",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-3",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "Explicit Base-10 Expansion.",
  "body": "Explicit Base-10 Expansion  Use your knowledge of place-value to explicitly write the integer as the sum of its base-10 components.  "
},
{
  "id": "sec_firstch-b2ten-4",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-4",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "Base-10 Place Value.",
  "body": "Base-10 Place Value  Use your knowledge of place-value to answer the following.  "
},
{
  "id": "sec_firstch-b2ten-5-5",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-5-5",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "Convert to Base-10.",
  "body": "Convert to Base-10  Use your knowledge of place-value to answer the following.  "
},
{
  "id": "sec_firstch-b2ten-5-6",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-5-6",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "Convert to Base-10.",
  "body": "Convert to Base-10  Use your knowledge of place-value to answer the following.  "
},
{
  "id": "sec_firstch-b2ten-5-7",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-5-7",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "Convert to Base-10.",
  "body": "Convert to Base-10  Use your knowledge of place-value to answer the following.  "
},
{
  "id": "sec_firstch-b2ten-5-8",
  "level": "2",
  "url": "sec_firstch-b2ten.html#sec_firstch-b2ten-5-8",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "Convert to Base-10.",
  "body": "Convert to Base-10  Use your knowledge of place-value to answer the following.  "
},
{
  "id": "sec_firstch-ten2b",
  "level": "1",
  "url": "sec_firstch-ten2b.html",
  "type": "Section",
  "number": "1.3",
  "title": "Converting from Base-10 to Non-Standard Bases",
  "body": " Converting from Base-10 to Non-Standard Bases   In the previous section, we considered that representation of numbers using bases other than the base-10 (decimal) system is possible, and sometimes necessary. In that section you considered the true meaning of place-value and built on your intuitive understanding to identify a scheme for converting an integer, written in any non-standard base, into its decimal- equivalent.  In this section, we'll work in the opposite direction. Say we have a decimal represresentation of a value. How do we identify or construct its base- equivalent?   Developing a Strategy  THIS SECTION WILL NEED LOTS OF EDITING -- just getting a \"working version\" up for now.  In order to convert a value whose decimal representation is into its corresponding base- equivalent, we need to first identify the number of whole copies of which divide evenly into . The left over amount (you've likely called this the remainder when discussing division in your previous math courses) will be the singles digit in the base- representation of .  Let's consider an example, which we'll parse throughout this discussion. Consider the decimal value , for which we'll try to discover its base- equivalent. The paragraph above suggests that we should start by identifying the number of \"whole copies\" of which divide evenly into . Notice that , so there are \"whole\" copies of within the decimal value , with a remainder of . That is, , and will occupy the singles-digit in the base- representation of .  How can we identify the next digit to the left in the base- representation of ? That digit will be the remainder after considering the number of whole copies of within the decimal value , after accounting for the singles digit. That is, the digit occupying the second place-value will be the remainder after considering the number of whole copies of which divide evenly into . More simply, we could consider the remainder after is divided into -- the quotient from the previous step. From here, we note that , and so the digit occupying the second position will be .  Identifying the digit occupying the remaining positions is similar. The next digit will be the remainder, when dividing into the quotient from the previous step (here, that value was ). Since , the digit occupying the third position from the right is . Similarly, the digit occupying the next position is the remainder after is divided into (again, using the previous quotient). Since , the digit occupying that fourth position is . Finally, the leftmost digit will be the remainder when this quotient ( ) is divided by the desired base (here, ). So we have , and the leftmost digit is . To summarize, we've discovered that .  Let's describe the process above before summarizing with a more concise version of the procedure. If we wish to find the base- equivalent representation of the decimal integer , we write Next, we rewrite in the same fashion. We continue this while the quotients, are non-zero. Once we arrive at a quotient , the process terminates and we use the remainders to write the base- representation of our original .  We recap the process of constructing the base- equivalent of below. At the last line, we arrive at a quotient of , so we terminate the procedure. The base- encoding of is given by , reading the remainders from the last line back up to the first.   Let's Try It!  Now that we've developed a strategy for writing the base- equivalent of a given decimal integer, let's get more comfortable using it. In this section, you'll have a variety of opportunities to work through our algorithm. You'll have lots of support through the initial examples, but we'll provide less and less structure with each successive task.  Convert to Binary, Part I   Convert to Binary, Part II   Convert to Binary, Part III   Convert to Binary, Part IV   Now that you've converted from decimal to binary a few times, let's work with some other bases. In the examples that follow, the bases we want to convert to will change but your strategy remains the same.  Convert to Base-b I   Convert to Base-b II   Convert to Base-b III    Converting to Hexadecimal  Let's close out the section with an example showing how to convert a decimal integer into hexadecimal. As reminder, hexadecimal is the base- number system. We make use of the characters through to reprecent the decimal values through in order to avoid ambiguity in the base- value we are writing. Below is a completely worked example, but it is followed by an embedded exercise for you to confirm your understanding.  Converting from Decimal to Hexadecimal (base-16)  Convert to its equivalent hexadecimal form.   Remembering that , we can write the hexadecimal representation of as .   Convert to Hexadecimal    Conclusion  In this section, we've learned the mechanics of converting a decimal number into its base- equivalent for a variety of bases. You got practice implementing the conversion algorithm, and even worked in bases higher than -- where we needed to introduce the use of symbols to represent large digits. In the next section, we'll explore the most common non-standard base systems in a bit more detail. We'll also highlight the connections between them.   "
},
{
  "id": "sec_firstch-ten2b-4-3",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-3",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "Convert to Binary, Part I.",
  "body": "Convert to Binary, Part I  "
},
{
  "id": "sec_firstch-ten2b-4-4",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-4",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Convert to Binary, Part II.",
  "body": "Convert to Binary, Part II  "
},
{
  "id": "sec_firstch-ten2b-4-5",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-5",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Convert to Binary, Part III.",
  "body": "Convert to Binary, Part III  "
},
{
  "id": "sec_firstch-ten2b-4-6",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-6",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "Convert to Binary, Part IV.",
  "body": "Convert to Binary, Part IV  "
},
{
  "id": "sec_firstch-ten2b-4-8",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-8",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "Convert to Base-b I.",
  "body": "Convert to Base-b I  "
},
{
  "id": "sec_firstch-ten2b-4-9",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-9",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "Convert to Base-b II.",
  "body": "Convert to Base-b II  "
},
{
  "id": "sec_firstch-ten2b-4-10",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-4-10",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "Convert to Base-b III.",
  "body": "Convert to Base-b III  "
},
{
  "id": "sec_firstch-ten2b-5-3",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-5-3",
  "type": "Example",
  "number": "1.3.8",
  "title": "Converting from Decimal to Hexadecimal (base-16).",
  "body": "Converting from Decimal to Hexadecimal (base-16)  Convert to its equivalent hexadecimal form.   Remembering that , we can write the hexadecimal representation of as .  "
},
{
  "id": "sec_firstch-ten2b-5-4",
  "level": "2",
  "url": "sec_firstch-ten2b.html#sec_firstch-ten2b-5-4",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "Convert to Hexadecimal.",
  "body": "Convert to Hexadecimal  "
},
{
  "id": "sec_firstch-properties",
  "level": "1",
  "url": "sec_firstch-properties.html",
  "type": "Section",
  "number": "1.4",
  "title": "Properties of Binary, Octal, and Hexadecimal Systems",
  "body": " Properties of Binary, Octal, and Hexadecimal Systems   In this section we'll explore some of the properties of the binary, octal, and hexadecimal number systems. The majority of the section will work with the binary number system, but then we'll explore its connections to the octal and hexidecimal systems as a way to motivate why they are used.   Properties of Binary Numbers  As we've discussed, the binary number system uses only the two digits and . These bi nary dig its are commonly referred to as bits . Consider the following questions associated with binary numbers.  Largest and Smallest  What are the smallest and largerst positive integers representable by and -bit binary number?   The smallest positive integer would be , or more simply . The largest positive integer would be , which is . We can see this by evaluating the full expansion, or by recognizing that this is equivalent to .    Tracking Time  Approaching the year 2000, most computers had a 32-bit processor. Knowing also that computers typically store time in number of seconds elapsed since midnight January 1, 1970 , how close were we to computers not being able to tell the time? That is, when would the number of seconds elapsed since midnight on January 1, 1970 become too large to store as a 32-bit binary number?   The largest 32-bit positive integer is equivalent to the decimal integer . There are about 365 days each year, 24 hours in each day, 60 minutes in each hour, and 60 seconds in each minute. Using this, computers could successfully keep time for Computers' timekeeping was never in any real danger, but now with 64-bit processors, we won't need to worry for over half a trillion years!    Up until now, we've been working only with positive integer values. Computers are certainly capable of handling more general values -- indeed, negative integers and floating point numbers are all data types recognized by computers. How do they store such values?  If we would like to store a signed integer (allowing for both positive and negative values), then we need to reserve one digit for encoding the sign on the value. One way to do this is to use the left-most bit to encode the sign (0 is positive, 1 is negative), and all remaining bits to encode the absolute value of the number encoded. This representation scheme is called sign-magnitude , but there are other methods such as one's complement and two's complement .  Largest and Smallest Signed Integers  What are the largest and smallest representable 8-bit signed integers?   The largest 8-bit signed integer would be encoded as , which is equivalent to . The smallest integer would be encoded as , which represents under the sign-magnitude scheme.  An interesting property of sign-magnitude is that there are two ways to represent !    Considering the consequences associated with different number encoding implementations is beyond the scope of this course. Interested students should look for a course in Numerical Analysis , which will cover methods for representing floating point numbers, floating point arithmetic, and more.   Connecting Binary to Octal and Hexadecimal  Perhaps you are convinced that the binary system is important because machines lack fingers and toes to count on, but why are the octal and hexadecimal systems also used? Binary encodings can be quite lengthy. To represent the number , we need bits. Its difficult to extract any meaning from such a number by looking at its binary representation. By grouping bits together, we can achieve more efficient encodings. Additionally, since we are simply grouping adjacent bits together with one another, we can quickly convert between binary and either octal, hexadecimal, or even whatever fancy name you want to give to a base-32 or base-64 numbering system. Let's take a look at an example below.  Binary to Hexadecimal  Convert to its hexadecimal equivalent.  Start by grouping sets of four consecutive bits together. since every four bits can be encoded using a single hexadecimal digit. We must do this grouping beginning with the rightmost bit. Once we have the bits grouped, then we can convert the groups of four bits to their equivalent hexadecimal digits independently of one another.     Binary to Octal  Convert to its octal equivalent.   Similarly to the previous example, we'd like to group our bits together. Here, we would like to create groups of three bits (since we are converting to base-8, and ), but our binary number is only 8-bits in length. We'll start by padding the number with an extra 0 on the left. Do you agree that it doesn't change the value of the encoded number? Once we've done this, the conversion is just like before. We convert each group of three consecutive bits into the corresponding octal digit independently of the other groups.     Hexadecimal to Binary  Convert to its binary equivalent.   We are now just working backwards. Each hexadecimal digit will be encoded by four bits in the corresponding binary representation. That is, we'll expand each hexadecimal digit into four bits in the binary representation. Similar to the previous examples, this expansion can happen independently for each hexadecimal digit.     Did you find those conversions to be much easier than the conversions we've made between generic pairs of bases?   Conclusion  There's nothing here yet.   "
},
{
  "id": "sec_firstch-properties-3-3",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-3-3",
  "type": "Example",
  "number": "1.4.1",
  "title": "Largest and Smallest.",
  "body": "Largest and Smallest  What are the smallest and largerst positive integers representable by and -bit binary number?   The smallest positive integer would be , or more simply . The largest positive integer would be , which is . We can see this by evaluating the full expansion, or by recognizing that this is equivalent to .   "
},
{
  "id": "sec_firstch-properties-3-4",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-3-4",
  "type": "Example",
  "number": "1.4.2",
  "title": "Tracking Time.",
  "body": "Tracking Time  Approaching the year 2000, most computers had a 32-bit processor. Knowing also that computers typically store time in number of seconds elapsed since midnight January 1, 1970 , how close were we to computers not being able to tell the time? That is, when would the number of seconds elapsed since midnight on January 1, 1970 become too large to store as a 32-bit binary number?   The largest 32-bit positive integer is equivalent to the decimal integer . There are about 365 days each year, 24 hours in each day, 60 minutes in each hour, and 60 seconds in each minute. Using this, computers could successfully keep time for Computers' timekeeping was never in any real danger, but now with 64-bit processors, we won't need to worry for over half a trillion years!   "
},
{
  "id": "sec_firstch-properties-3-7",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-3-7",
  "type": "Example",
  "number": "1.4.3",
  "title": "Largest and Smallest Signed Integers.",
  "body": "Largest and Smallest Signed Integers  What are the largest and smallest representable 8-bit signed integers?   The largest 8-bit signed integer would be encoded as , which is equivalent to . The smallest integer would be encoded as , which represents under the sign-magnitude scheme.  An interesting property of sign-magnitude is that there are two ways to represent !   "
},
{
  "id": "sec_firstch-properties-4-3",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-4-3",
  "type": "Example",
  "number": "1.4.4",
  "title": "Binary to Hexadecimal.",
  "body": "Binary to Hexadecimal  Convert to its hexadecimal equivalent.  Start by grouping sets of four consecutive bits together. since every four bits can be encoded using a single hexadecimal digit. We must do this grouping beginning with the rightmost bit. Once we have the bits grouped, then we can convert the groups of four bits to their equivalent hexadecimal digits independently of one another.    "
},
{
  "id": "sec_firstch-properties-4-4",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-4-4",
  "type": "Example",
  "number": "1.4.5",
  "title": "Binary to Octal.",
  "body": "Binary to Octal  Convert to its octal equivalent.   Similarly to the previous example, we'd like to group our bits together. Here, we would like to create groups of three bits (since we are converting to base-8, and ), but our binary number is only 8-bits in length. We'll start by padding the number with an extra 0 on the left. Do you agree that it doesn't change the value of the encoded number? Once we've done this, the conversion is just like before. We convert each group of three consecutive bits into the corresponding octal digit independently of the other groups.    "
},
{
  "id": "sec_firstch-properties-4-5",
  "level": "2",
  "url": "sec_firstch-properties.html#sec_firstch-properties-4-5",
  "type": "Example",
  "number": "1.4.6",
  "title": "Hexadecimal to Binary.",
  "body": "Hexadecimal to Binary  Convert to its binary equivalent.   We are now just working backwards. Each hexadecimal digit will be encoded by four bits in the corresponding binary representation. That is, we'll expand each hexadecimal digit into four bits in the binary representation. Similar to the previous examples, this expansion can happen independently for each hexadecimal digit.    "
},
{
  "id": "sec_firstch-between-bases",
  "level": "1",
  "url": "sec_firstch-between-bases.html",
  "type": "Section",
  "number": "1.5",
  "title": "Converting Between Arbitrary Bases",
  "body": " Converting Between Arbitrary Bases   Up to this point, we've discussed converting from base- to base- and also from base- to base- . We also discussed conversions between binary and either the octal or hexadecimal systems. We saw that this was made convenient because each group of three bits could be encoded as a single octal digit, and similarly each group of four bits could be encoded as a single hexadecimal digit. The relationship between the bases ( and ) is what made this possible. Such a quick conversion is not even possible between octal and hexadecimal because is not a positive integer power of .  Unfortunately, in order to convert between two arbitrary bases, we are stuck with converting to base- and then from base- into the desired new base. We're already comfortable with each of these individual tasks, so rather than waste time with arbitrary base-conversions now, we'll revisit this task later in our course. At that point, we'll know a bit about logic and programmatic flow control, some looping structures, and we'll tackle the problem with some code.   "
},
{
  "id": "sec_sets-ch-foundations",
  "level": "1",
  "url": "sec_sets-ch-foundations.html",
  "type": "Section",
  "number": "2.1",
  "title": "Foundations for Working with Sets",
  "body": " Foundations for Working with Sets  In order to start working with sets, we'll need to introduce some notation. As mentioned in the introduction to this champter, a set is a (possibly empty) collection of items, called elements . A useful mental paradigm for sets is to think of a set as a \"bag of items\". The elements of a set are the items which can be observed by reaching into the bag and taking something out. In general, sets will be denoted using capital letters such as , , , etc. Elements of those sets will be denoted using lowercase letters. We have the following additional notation for working with sets.  Since sets contain elements, it is useful to have a notation to denote whether and element belongs to a set. The notation states that the element is in the set , while the notation states that the element is not an element of the set . For convenience, we may write , to indicate that all of the elements , , and belong to the set . Finally, if a set has no elements, it is called the empty-set and is denoted by .  Sets and Elements I   Sets and Elements II   We need methods for describing the contents of a set. Two are quite common: roster notation lists all of the elements containined in a set, while set-builder notation describes a condition which determines set membership. Roster notation is useful when the set to be described contains few elements or follows a simple pattern. For example, and are both descriptions in roster notation. Set-builder notation follows the form . For example, is the set of all real numbers ( ) whose squares are less than .  In addition to roster and set-builder notation, some sets are simply so common that they have their own notations. The set of natural numbers, , is denoted by . The set of integers, , is denoted by . The set of all rational numbers is denoted by and the set of all real numbers is denoted by , as you saw in the example above.  Roster Notation I  Use your knowledge of roster notation to answer the following question.   Roster Notation I  Use your knowledge of roster notation to answer the following question.   In addition to describing the conents of a set, an ability to describe relationships between sets is also useful. If every element of the set is also an element of the set , then we say that is a subset of and we write to denote this. If and , then we write since and contain exactly the same elements.  Set Notation I  Use your knowledge of sets, elements, and subsets to answer the following.   Set Notation II  Use your knowledge of sets, elements, and subsets to answer the following.   Set Notation III  Use your knowledge of sets, elements, and subsets to answer the following.   Set Notation IV  Convert the following sets from set-builder notation into roster notation.   Set Notation  Use your knowledge of sets, elements, and subsets to answer the following.   Now that you've practiced with some of our basic set notation, we'll introduce one more concept before moving on to the next section. Given a set containing a finite number of elements, it is sometimes useful to identify the number of elements in the set. The cardinality of a set measures the number of elements in the set . The cardinality of is often denoted by or .  Cardinality of a Set I  Use your knowledge of roster notation and cardinality to answer the following question.   Cardinality of a Set II  Use your knowledge of roster notation and cardinality to answer the following question.   In this section we've built up a familiarity with sets and their elements. We've also described relationships between sets. In particular, we've considered what it means for one set to be a subset of another set as well as what it means for two sets to be equal to one another. In the next section, we'll consider operations on and between sets.  "
},
{
  "id": "sec_sets-ch-foundations-4",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-4",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "Sets and Elements I.",
  "body": "Sets and Elements I  "
},
{
  "id": "sec_sets-ch-foundations-5",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-5",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "Sets and Elements II.",
  "body": "Sets and Elements II  "
},
{
  "id": "sec_sets-ch-foundations-8",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-8",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "Roster Notation I.",
  "body": "Roster Notation I  Use your knowledge of roster notation to answer the following question.  "
},
{
  "id": "sec_sets-ch-foundations-9",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-9",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "Roster Notation I.",
  "body": "Roster Notation I  Use your knowledge of roster notation to answer the following question.  "
},
{
  "id": "sec_sets-ch-foundations-11",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-11",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "Set Notation I.",
  "body": "Set Notation I  Use your knowledge of sets, elements, and subsets to answer the following.  "
},
{
  "id": "sec_sets-ch-foundations-12",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-12",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "Set Notation II.",
  "body": "Set Notation II  Use your knowledge of sets, elements, and subsets to answer the following.  "
},
{
  "id": "sec_sets-ch-foundations-13",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-13",
  "type": "Checkpoint",
  "number": "2.1.7",
  "title": "Set Notation III.",
  "body": "Set Notation III  Use your knowledge of sets, elements, and subsets to answer the following.  "
},
{
  "id": "sec_sets-ch-foundations-14",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-14",
  "type": "Checkpoint",
  "number": "2.1.8",
  "title": "Set Notation IV.",
  "body": "Set Notation IV  Convert the following sets from set-builder notation into roster notation.  "
},
{
  "id": "sec_sets-ch-foundations-15",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-15",
  "type": "Checkpoint",
  "number": "2.1.9",
  "title": "Set Notation.",
  "body": "Set Notation  Use your knowledge of sets, elements, and subsets to answer the following.  "
},
{
  "id": "sec_sets-ch-foundations-17",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-17",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "Cardinality of a Set I.",
  "body": "Cardinality of a Set I  Use your knowledge of roster notation and cardinality to answer the following question.  "
},
{
  "id": "sec_sets-ch-foundations-18",
  "level": "2",
  "url": "sec_sets-ch-foundations.html#sec_sets-ch-foundations-18",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "Cardinality of a Set II.",
  "body": "Cardinality of a Set II  Use your knowledge of roster notation and cardinality to answer the following question.  "
},
{
  "id": "sec_sets-ch-operations",
  "level": "1",
  "url": "sec_sets-ch-operations.html",
  "type": "Section",
  "number": "2.2",
  "title": "Operations with Sets",
  "body": " Operations with Sets  In the previous section we were introduced to the notion of a set, its elements, the cardinality of a finite set, the notion of subsets, and also the notion of equality between sets. In this section, we'll be introduced to four common operations on sets.  The complement of a set, denoted by or .  The intersection between two sets, denoted by .  The union between two sets, denoted by .  The difference between two sets, denoted by .    Given a set in some universal set , we can define the complement of in to be the collection of all elements which are in the universal set but not in the set . We denote the complement of the set by or .  Given two sets and , we can define the intersection between and as the collection of elements which are in both the set and also the set . We use the notation to denote the intersection between and .  Compute an Intersection   Given two sets and , we can define the union between and as the collection of elements which are in at least on of the set or the set . We use the notation to denote the union between and .  Union and Intersection I   Union and Intersection II   In addition to computing unions and intersections over pairs of sets, we can combine these operations to created new sets. Like in your prior exposure to arithmetic and algebra, parentheses can be used to dictate the order in which operations are to be evaluated. In the absence of parentheses, the complement is evaluated before unions and intersections. Then unions and intersections are evaluated from left to right.  Combining Operations I   Combining Operations II   Combining Operations III   Combining Operations IV   Now that you've mastered the union, the intersection, and the complement. Let's see our last set operation, the set difference. Given two sets and , the set difference is denoted by , and is the set consisting of all elements of which are not elements of . That is, to find the set , we begin with all of the elements of and remove any elements which also appear in .  Need to write MyOpenMath problems to add in...  "
},
{
  "id": "sec_sets-ch-operations-5",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-5",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "Compute an Intersection.",
  "body": "Compute an Intersection  "
},
{
  "id": "sec_sets-ch-operations-7",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-7",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "Union and Intersection I.",
  "body": "Union and Intersection I  "
},
{
  "id": "sec_sets-ch-operations-8",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-8",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "Union and Intersection II.",
  "body": "Union and Intersection II  "
},
{
  "id": "sec_sets-ch-operations-10",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-10",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "Combining Operations I.",
  "body": "Combining Operations I  "
},
{
  "id": "sec_sets-ch-operations-11",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-11",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "Combining Operations II.",
  "body": "Combining Operations II  "
},
{
  "id": "sec_sets-ch-operations-12",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-12",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "Combining Operations III.",
  "body": "Combining Operations III  "
},
{
  "id": "sec_sets-ch-operations-13",
  "level": "2",
  "url": "sec_sets-ch-operations.html#sec_sets-ch-operations-13",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "Combining Operations IV.",
  "body": "Combining Operations IV  "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic",
  "level": "1",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html",
  "type": "Section",
  "number": "3.1",
  "title": "Statements and Symbolic Logic",
  "body": " Statements and Symbolic Logic   Statements and logic are foundational across all of mathematics. In this section, we'll formally introduce the definition of a mathematical statement and we'll introduce symbolic logic as a set of notation to remove the ambiguity that often accompanies written language. Along the way, we'll also provide a limited introduction to truth tables as a mechanism for analyzing the conditions under which compound logical statements are valid (true).   Statements  In mathematics, a statement is a claim which is either true or false , but for which there is no ambiguity. The following are examples of statements.  Water boils at C.  If a triangle is a right triangle, and and are the lengths of its legs while is the length of its hypotenuse, then .  The real number is even.  Notice that each of these claims is either true or false, and the truth value of the claim does not depend on the reader. Water indeed boils at C, the Pythagorean Theorem does hold for right triangles, and the number is not an even number. That is the first two claims are true, while the second one is false. Since the three claims have these truth values regardless of who is evaluating them, they are indeed statements .  Since we've defined what a statement is , it will also be helpful to have examples of what a statement isn't . The following are examples which are not statements.  Trigonometry is difficult.  Are you enjoying this book so far?  Make sure you complete all the embedded exercises in this section.  None of the above are statements because they do not have truth values. The first is a matter of opinion, whose truth value is dependent on the reader. The second is a question, while the third is a command.  Now is a good time for you to try your hand at identifying statements. Use the following embedded exercises to check your understanding.  Identifying Statements   If you got all of those correct on the first try, nice work! If you got any wrong on the first try, click the button to generate a new version and try again on a new set of questions.    Symbolic Logic  Written and spoken language can have ambiguous meaning. For example, if we say \"I will be at the gym or I will be studying at the library\", what we really mean is that I will be doing one or the other -- but not both. In mathematics we do not work with ambiguity, indeed compound statements -- individual (atomic) statements joined by logical operators (like or ) -- must be statements in their own right. That is, these compound logical statements must be true or false, but not both. For this reason, we'll develop symbolic logic , including a set of boolean (true\/false) algebraic operators in our further exploration of logic.  We'll refer to an atomic statement as a statement which cannot be decomposed into smaller substatements. For example, the statement \"it is raining\" is an atomic statement, while the statement \"it is raining and I have an umbrella\" is not an atomic statement. The latter can be decomposed into the atomic statements \"it is raining\" and \"I have an umbrella\". In symbolic logic we'll use letters like , , , etc. to represent atomic statements. For example, Each of those statements listed above is an atomic statement which cannot be decomposed into smaller sub-statements. Using , , and to represent their corresponding statements is convenient and efficient.  We'll now introduce four logical operators, corresponding to not , and , or , and if\/then . These operators allow us to combine statements to build compound logical statements just like we do in written and spoken language.  The negation operator corresponds to the word \"not\" and is used to switch the truth value of a statement. There are a variety of symbols which can be used to represent the negation operator. Common symbols are , , or -- since the focus of this text is mathematics for computing, we'll use to signify negation, since that is common in programming languages. That is, the statement is the negation of the statement -- they have opposite truth values. We can make use of a truth table to describe all of this compactly.        T  F    F  T      The conjunction operator takes the place of the word \"and\". The conjunction is denoted by , and it requires two statements -- one to the left of the operatory and one to the right, for example . The compound logical expression evaluates to *true* only if both of its components ( and ) are true. That is,         T  T  T    T  F  F    F  T  F    F  F  F      The disjunction operator replaces the word \"or\", and is denoted by . Like the conjunction, the disjunction requires two statements but it evaluates to *true* as long as at least one of its components are true. That is,         T  T  T    T  F  T    F  T  T    F  F  F      The implication (or conditional ) operator is used to denote \"if\/then\" statements. This is another operator that requires two component statements. The implication operator is typically written as an arrow (either or ). I'll use the single line arrow to denote the implication -- that is, . As mentioned at the beginning of this paragraph, it is common to read as \"if , then \", but another common reading is that \" implies \". The implication is true in all cases except when is *true* and is *false*. That is,         T  T  T    T  F  F    F  T  T    T  T  T      For the implication , we consider the hypothesis and to be the conclusion . This is helpful for constructing formal arguments, writing technical mathematical theorems, and more. if you are not quite that you grasp the notion of a conditional statement just yet, it may be helpful to think of as a promise . That is, \"if you do for me, then I will do for you\". A simple example I often give my students is \"If you mow my lawn, then I will pay you $20\" -- my promise made is only broken if you mow my lawn but I don't pay you. This is just like the implication.   Summary  That's plenty for this section. Here you were introduced to statements , which are claims which are either true or false -- but cannot be both. You were also introduced to our foundational logical operators -- the negation (not), the conjunction (and), the disjunction (or), and the conditional (if\/then). These are all of the main building blocks of logic. We'll see more with formal logic, in particular with compound logical statements and truth tables for evaluating them, in the next section.   "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic-3-5",
  "level": "2",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html#sec_logic-ch-statements-and-symbolic-logic-3-5",
  "type": "Checkpoint",
  "number": "3.1.1",
  "title": "Identifying Statements.",
  "body": "Identifying Statements  "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic-4-5-9",
  "level": "2",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html#sec_logic-ch-statements-and-symbolic-logic-4-5-9",
  "type": "Table",
  "number": "3.1.2",
  "title": "",
  "body": "       T  F    F  T    "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic-4-6-7",
  "level": "2",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html#sec_logic-ch-statements-and-symbolic-logic-4-6-7",
  "type": "Table",
  "number": "3.1.3",
  "title": "",
  "body": "        T  T  T    T  F  F    F  T  F    F  F  F    "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic-4-7-3",
  "level": "2",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html#sec_logic-ch-statements-and-symbolic-logic-4-7-3",
  "type": "Table",
  "number": "3.1.4",
  "title": "",
  "body": "        T  T  T    T  F  T    F  T  T    F  F  F    "
},
{
  "id": "sec_logic-ch-statements-and-symbolic-logic-4-8-13",
  "level": "2",
  "url": "sec_logic-ch-statements-and-symbolic-logic.html#sec_logic-ch-statements-and-symbolic-logic-4-8-13",
  "type": "Table",
  "number": "3.1.5",
  "title": "",
  "body": "        T  T  T    T  F  F    F  T  T    T  T  T    "
},
{
  "id": "sec_logic-ch-compound-statements",
  "level": "1",
  "url": "sec_logic-ch-compound-statements.html",
  "type": "Section",
  "number": "3.2",
  "title": "Compound Statements, Truth Tables, and Logical Equivalence",
  "body": " Compound Statements, Truth Tables, and Logical Equivalence   In the previous section we were introduced to statements and our four foundational logical operators -- the negation ( ), the conjunction ( ), the disjunction ( ), and the implication ( ). We described and as atomic statements and these statements involving operators as compound logical statements . We also evaluated the conditions under which these compound logical statements are true by constructing tables called truth tables. A single table summarizing the results from that previous section appears below:            T  T  F  T  T  T    T  F  F  F  T  F    F  T  T  F  T  T    F  F  T  F  F  T      Given your previous experience with mathematics, it likely comes as no surprise to you that we can combine our statements and logical operators together to build more complex logical statements. These more complex statements will be the focus of this section of our text.   Truth Tables  In both the previous section and also the introduction to this section, we've utilized truth tables to analyse the conditions under which our compound logical statements are true or false . We've used this structures without much explanation though, so we'll take a moment to discuss them here.  In short, a truth table is a stucture which allows us to systematically analyze truth values for logical statements. The number of rows and columns in a truth table will depend on the complexity of the logical statement to be analysed. For a logical statement that includes distinct atomic statements, a truth table with rows is required to capture all of the combinations of truth and falsity for each of the atomic statements. The number of columns in the truth table will vary with the number of operators in the statement. You can (and should) use the strategy below when constructing a truth table to analyze a logical statement or argument.  Identify the number of atomic statements included in the compound logical statement.   As a reminder, each atomic statement will be represented by a lowercase letter in the symbolic form of the logical statement.   Build a truth table with rows (not including the header row), where is the number of atomic statements you identified in step 1.  Build a column for each of the individual atomic statements.   Beginning with the right-most atomic statement in the table, alternate T\/F\/T\/F\/T\/F\/T\/F... all the way down the table.  Move one column to the left and fill in the column for your next atomic statement by doubling the number of T's and F's appearing together. That is, fill in the column with T\/T\/F\/F\/T\/T\/F\/F...  Continue moving to the left one column at a time and filling in the column by doubling the number of consecutive trues and falses appearing in the column to the right until you have a column built for each atomic statement. For this next column you'd have four trues followed by four falses over and over again. Then eight trues with eight falses, etc.   Look for any negation operators attached to atomic statements and build a column in the truth table for each negated atomic statement that appears.  The order of operations for logic are: parentheses , negations , conjunctions \/ disjunctions (left to right), and then implications . Slowly add columns to your truth table according to this order of operations that will build up to the full compound logical statement you are analyzing.   PRO TIP: Add new columns so that can be populated with their T\/F values by looking only at one or two existing columns in your truth table. If you are looking at more than two columns to decide whether to place a T or F in your new column, you'll make mistakes.     Consider the following truth table as an example for analyzing the truth values of .             T  T  T        T  T  F        T  F  T        T  F  F        F  T  T        F  T  F        F  F  T        F  F  F        Consider the following questions before trying to fill in the truth table on your own.  Why are there 8 rows in this truth table? Is having 8 correct?  Why isn't there a column if there are columns for and ?  Are 7 columns appropriate here? Can we fill in each column by looking at the truth values in at most two columns to the left of it?  Now fill in the remaining truth values before moving on.   Compound Statements and Truth Tables  You have all the tools you need to analyze compound logical statements with the help of truth tables. As such, this subsection mainly consists of embedded example problems for you to solve. As usual, these embedded examples are interactive and will help you check your understanding. The earliest examples involve truth tables that are mostly set up for you. The final examples ask you to construct nearly all aspects of the truth tables while you build your solutions. The examples slowly build you up to being able to approach these problems independently. [NEED TO UPDATE MoM PROBLEM TO HAVE DYNAMIC ANSWER COLUMNS] Evaluating a Truth Table I   Evaluating a Truth Table II   Evaluating a Truth Table III   Evaluating a Truth Table IV   Evaluating a Truth Table V   Evaluating a Truth Table VI   Now you'll be more responsible for building your own truth table. The rows are predetermined, but you'll need to fill in the column headings.  Building a Truth Table I   Building a Truth Table II   Building a Truth Table III   Building a Truth Table IV   How did you do with building those truth tables? Are you gaining confidence in constructing the tables and using them to evaluate the conditions under which a compound logical expression are true or false? In the next subsection, we'll see how to use truth tables to determine whether compound logical statements are equivalent to one another.   Logical Equivalence  Now that we know how to evaluate logical expressions, the next natural question to ask is \"when are two logical expressions equivalent to one another?\". Simply put, two expressions are logically equivalent if they have exactly the same truth values under the same conditions. In terms of their truth tables, they have exactly the same combination of trues and falses in exactly the same order (as long as the atomic statements are arranged identically). This means that, if we build a truth table for each of the statements in queston, ensuring that the tables include the same atomic statements and that the truth values for those atomic statements appear in the same order, then two statements are logically equivalent if the final columns in their truth tables are identical.  For example, we might consider the logical statements and . We can construct and compare their truth tables below:         T  T  T    T  F  F    F  T  T    F  F  T    and          T  T  F  T    T  F  F  F    F  T  T  T    F  F  T  T    Notice that the final columns of the two truth tables are identical. Since and are true and false under exactly the same conditions, we have identified that they are logically equivalent. In this case, we'll write that .  Perhaps you also noticed that building two truth tables was inefficient and took up lots of space and effort. We can condense our work into a single truth table as long as we compare the columns in the truth table that correspond to our statements in question. For example, consider the truth table below as an alternative to the two tables above.           T  T  F  T  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T    Notice still that the two columns corresponding to our statements, and are identical.  Check your understanding in the following examples by building the truth tables and determining whether the statements are logically equivalent. [NEED TO WRITE EXAMPLES INTO MoM]  "
},
{
  "id": "sec_logic-ch-compound-statements-2-1-10",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-2-1-10",
  "type": "Table",
  "number": "3.2.1",
  "title": "",
  "body": "           T  T  F  T  T  T    T  F  F  F  T  F    F  T  T  F  T  T    F  F  T  F  F  T    "
},
{
  "id": "sec_logic-ch-compound-statements-3-4-2",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-3-4-2",
  "type": "Table",
  "number": "3.2.2",
  "title": "",
  "body": "            T  T  T        T  T  F        T  F  T        T  F  F        F  T  T        F  T  F        F  F  T        F  F  F        "
},
{
  "id": "sec_logic-ch-compound-statements-4-3",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-3",
  "type": "Checkpoint",
  "number": "3.2.3",
  "title": "Evaluating a Truth Table I.",
  "body": "Evaluating a Truth Table I  "
},
{
  "id": "sec_logic-ch-compound-statements-4-4",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-4",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "Evaluating a Truth Table II.",
  "body": "Evaluating a Truth Table II  "
},
{
  "id": "sec_logic-ch-compound-statements-4-5",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-5",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "Evaluating a Truth Table III.",
  "body": "Evaluating a Truth Table III  "
},
{
  "id": "sec_logic-ch-compound-statements-4-6",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-6",
  "type": "Checkpoint",
  "number": "3.2.6",
  "title": "Evaluating a Truth Table IV.",
  "body": "Evaluating a Truth Table IV  "
},
{
  "id": "sec_logic-ch-compound-statements-4-7",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-7",
  "type": "Checkpoint",
  "number": "3.2.7",
  "title": "Evaluating a Truth Table V.",
  "body": "Evaluating a Truth Table V  "
},
{
  "id": "sec_logic-ch-compound-statements-4-8",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-8",
  "type": "Checkpoint",
  "number": "3.2.8",
  "title": "Evaluating a Truth Table VI.",
  "body": "Evaluating a Truth Table VI  "
},
{
  "id": "sec_logic-ch-compound-statements-4-10",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-10",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "Building a Truth Table I.",
  "body": "Building a Truth Table I  "
},
{
  "id": "sec_logic-ch-compound-statements-4-11",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-11",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "Building a Truth Table II.",
  "body": "Building a Truth Table II  "
},
{
  "id": "sec_logic-ch-compound-statements-4-12",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-12",
  "type": "Checkpoint",
  "number": "3.2.11",
  "title": "Building a Truth Table III.",
  "body": "Building a Truth Table III  "
},
{
  "id": "sec_logic-ch-compound-statements-4-13",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-4-13",
  "type": "Checkpoint",
  "number": "3.2.12",
  "title": "Building a Truth Table IV.",
  "body": "Building a Truth Table IV  "
},
{
  "id": "sec_logic-ch-compound-statements-5-3-3",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-5-3-3",
  "type": "Table",
  "number": "3.2.13",
  "title": "",
  "body": "        T  T  T    T  F  F    F  T  T    F  F  T    "
},
{
  "id": "sec_logic-ch-compound-statements-5-3-4",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-5-3-4",
  "type": "Table",
  "number": "3.2.14",
  "title": "",
  "body": "         T  T  F  T    T  F  F  F    F  T  T  T    F  F  T  T    "
},
{
  "id": "sec_logic-ch-compound-statements-5-4-1",
  "level": "2",
  "url": "sec_logic-ch-compound-statements.html#sec_logic-ch-compound-statements-5-4-1",
  "type": "Table",
  "number": "3.2.15",
  "title": "",
  "body": "          T  T  F  T  T    T  F  F  F  F    F  T  T  T  T    F  F  T  T  T    "
},
{
  "id": "sec_logic-ch-boolean-algebra",
  "level": "1",
  "url": "sec_logic-ch-boolean-algebra.html",
  "type": "Section",
  "number": "3.3",
  "title": "Boolean Algebra",
  "body": " Boolean Algebra   At the close of the previous section, you were introduced to the notion of logical equivalence . We saw there that two logical expressions are said to be logically equivalent if they have exactly the same truth values under exactly the same conditions for their atomic statements. This affords us an opportunity to discuss \"simplification\" of logical expressions. Indeed, it is preferrable to use fewer atomic statements and fewer operations whenever possible. This is especially true in the context of computing, which we'll discuss explicitly in the final two sections of this chapter.  This section of the text will introduce us to a variety of properties of Boolean Algebra which can be used to simplify logical expressions without the use of a truth table.   Properties in Boolean Algebra  There are several properties which hold in Boolean Algebra. Many of those are properties which you proved in the checkpoint exercises in the previous section of this chapter. The table below summarizes several basic properties which can then be used in proving more complex properties. Let , , and be atomic statements and let T denote a statement which is always true (a tautology ) and F denote a statement which is always false (a contradiction ).    Property Name  Equivalence    Double Negation     Absorption Laws                         Commutative Properties         Associative Properties         DeMorgan's Laws         Distributive Laws         Implication Conversion       As mentioned, the properties above can be used to prove logical equivalences between statements which may look symbolically different. One advantage to simplifying these logical statements is that they may result in fewer comparison evaluations. This can be particularly important in speeding up computational routines. You'll practice using the above properties in the checkpoint exercises that follow. [ADD CHECKPOINT EXERCISES TO MoM AND EMBED HERE]  "
},
{
  "id": "sec_logic-ch-boolean-algebra-3-2-6",
  "level": "2",
  "url": "sec_logic-ch-boolean-algebra.html#sec_logic-ch-boolean-algebra-3-2-6",
  "type": "Table",
  "number": "3.3.1",
  "title": "",
  "body": "   Property Name  Equivalence    Double Negation     Absorption Laws                         Commutative Properties         Associative Properties         DeMorgan's Laws         Distributive Laws         Implication Conversion     "
},
{
  "id": "sec_logic-ch-flow-control",
  "level": "1",
  "url": "sec_logic-ch-flow-control.html",
  "type": "Section",
  "number": "3.4",
  "title": "Logic for Flow Control",
  "body": " Logic for Flow Control   In this section we'll take what we've learned about logic and apply it to computing in such a way that it helps control which commands are run when a routine is called. We'll find that the logical connectors and , or , not , and if are quite useful in code. We'll start this section by using them to write some simple routines.  Once we've seen if , and , or , and not in action, We'll introduce three other logical operators often found in code. The else keyword can be combined with an if statement to provide alternate code to be run in the case that the conditions on the if statement are not satisfied. We can even combine else if to define alternate sets of conditions in series, resulting in the running of different code in each scenario. We'll also introduce two looping structures, the for loop and the while loop. These looping structures allow the same code to be run over and over again. In the case of the for loop a predetermined number of iterations will be run, but in the case of the while loop the code will be run until a termination condition is satisfied.   Conditional Statements in Code  Earlier in this chapter, we were exposed to conditional statements of the form . We read these statements If is true, then is true . The idea with code is quite similar -- the interpretation of If , then in code, however, is If is true, then do . Seeing this in action will help.  Let's write a simple snippet of code which will test whether an input value is even, and will report back \"The input is even!\" if that is the case. We'll see an implementation in pseudocode below, and then I'll provide a working version in Python so that you can run the code and experiment with it.   def is_even(myNumber):  if myNumber is divisible by 2:  print(\"The input is even!\")  return None   The first line in the pseudocode def ines the function, including its name and any inputs (parameters) it requires. The second line contains the if statement and its condition. That is, this line defines the If portion of our conditional statement. The line ends with a colon, and all indented lines below this one define what will be done if the condition is true. That is, the indented lines define the then portion of our conditional statement. Different programming languages have slightly different syntax. For example, the colon and indentation are used in Python, but curly braces surround the code to be run when the condition is true in C++, R, and others. The final line in the pseudocode definition of the function is a return statement. It describes what the result of the function is and how it will be passed back to the computing environment. The function we've written has nothing to return, which we describe as return ing None .  The following is a live implementation of the is_even() function in Python. Please consider experimenting with the code. At the very least, try evaluating is_even() for other input values.   The Python implementation of the is_even() function looks quite similar to the pseudocode we used to describe the function initially. The major difference is how the condition on the if statement appears. The expression myNumber % 2 computes the remainder when myNumber is divided by 2 . The == is a test for whether the value on the left of the operator is identically the same as the value on the right of the operator. All together, myNumber % 2 == 0 evaluates to true if the remainder when dividing the input myNumber by 2 is 0 , and it evaluates to false otherwise. This means that our call to print() will only be executed if the myNumber input parameter is even.  If you played around with the function, you'll have likely noticed that nothing is printed out if you pass a value to the myNumber parameter which is not even. We can add an else statement to print out that the input is odd if the original conditional is not satisfied. We'll do that in pseudocode and follow it up with a live implementation below.   def is_even(myNumber):  if myNumber is divisible by 2:  print(\"The input is even!\")  else:  print(\"The input is odd!\")  return None    Hopefully you noticed that we've constructed a function which no longer behaves correctly. If you didn't notice this, try passing the value 0.5 to the myNumber input parameter. The function prints out that \"The input is odd\" , but that's not correct. This brings up an important point about code and computing in general. Computers are great at following instructions, but they aren't smart. The computer has no way to know that it is providing us with wrong information -- instead, it is only following the instructions that we've written for it. We can create a better (and correct) version of our function if we use else if followed by an else statement to catch scenarios where the user has input a non-integer. Below is what that might look like using pseudocode as well as in a live Python implementation.   def is_even(myNumber):  if myNumber is divisible by 2:  print(\"The input is even!\")  else if myNumber has a remainder of 1 under division by 2:  print(\"The input is odd!\")  else:  print(\"The input was not an integer!\")  return None    Note that in the working implementation, the combination else if is shortened to elif . This is a common feature of many languages, since it helps to avoid nested if statements within else statements. The result is more compact and readable code.   Conditionals with Compound Conditions  In each iteration of the is_even() function explored in the previous subsection, we tested simple conditions for each if or else if conditional. We are certainly able to require more complex conditions to be satisfied in order for the code in the body of the conditional to be run. We can combine simple conditions using the and , or , and not logical connectors we've learned about throughout this chapter.  Let's see this by building a new function, `is_large_even()` which prints out \"The input is over 1000 and is even!\" if the input value exceeds and is en even number, and prints that \"The input is either small or is not even!\" otherwise. As before, we'll start with a pseudocode implementation followed by a live implementation in Python below.   def is_large_even(myNumber):  if (myNumber is even) and (myNumber > 1000):  print(\"The input is over 1000 and is even!\")  else:  print(The input is either small or is not even!)  return None    In Python we simply used the keyword and to create the compound conditional statement. The keywords or and not can be used similarly in Python. In other languages the syntax is for constructing these compound conditionals is similar, but you may need to use symbols in place of the and \/ or \/ not keywords. For example, in C++ we write \\amp\\amp to mean \"and\", use || in place of \"or\", and use ! in place of \"not\". For example, let's create a new function which will print \"true\" if its input value is large and even or is not a multiple of , but will print \"false\" otherwise. We show a version of the function in pseudocode and a working Python implementation below.   def is_large_even_or_not_mult3(myNumber):  if ((myNumber is even) and (myNumber > 1000)) or (myNumber is not a multiple of 3):  print(\"true\")  else:  print(\"false\")  return None    You may notice that, in the working implementation, myNumber % 3 != 0 was used to test whether the input myNumber is not divisible by . There are, of course, other ways to encode this test -- perhaps something like (not (myNumber % 3 == 0)) . There are always multiple means to an end; we typically prefer code which is more simple, more readable, and more efficient.   Looping with for and while  Now that we've seen conditionals as well as our logical connectors in action, let's see a slightly more advanced feature of code. We'll explore loops, which can help us re-run the same set of instructions many times. We'll make use of two types of loop here because they'll be helpful to us when we return to develop a base-conversion function which will convert between two arbitraty bases (although we'll build a function that only works as long as those bases are both at most 10).  We'll start our discussion of loops with the for loop. A for loop will run through a block of code (instructions) for a set number of iterations. For example, perhaps we would like to double every value in a list. Then we can struct a for loop which will double each value from an input list. The doubling code will run once for each element in the list and then the loop will terminate. Let's see such a function.   def double_list_values(myList):  n = length(myList)  doubled_list = new list of length n  for i in list(0, 1, ..., n - 1):  doubled_list element i = 2*(myList element i)  return doubled_list    Please experiment with the code above. Try evaluating double_list_values() on lists of a variety of lengths. The for loop in the function definition adapts automatically to input lists of any length. This makes our function quite flexible. You'll note that when we evaluated our function this time, we stored the result in a new variable and then explicitly printed it out. This is because values returned by a function are not generally printed out in any language. We need to explicitly ask for the returned value to be printed. See this for yourself by simply running double_list_values([1, 2, 3]) -- while nothing is printed out, the values of the input list are doubled.  There are a few additional things to notice here about the Python implementation of the double_list_values() function. First, a majority of programming languages are 0-indexed. That means for objects like lists or arrays, the first element occupies index 0, the second occupies index 1, etc. This takes some getting used to, but we've adopted the 0-indexing convention here since you are almost certain to encounter it in the future. Next, in the working implementation which uses Python, the code n*[0] initializes a list of length n , all of whose entries are 0 . In Python, lists are denoted\/defined by square brackets. Finally, in Python we can access the item occupying the i index of a list by using ListName[i] . Finally, values returned by a function are not printed out unless we explicitly ask for that behavior. You can see this for yourself by simply running double_list_values([1, 2, 3]) . You'll notice that other languages have slightly different syntax for working with lists.  What if there is no way to determine ahead of time the number of iterations that the code within the loop should be run? For example, what if we would like to run a block of code until a condition is no longer true? For example, what if we would like to double an input value until the result exceeds 100? There's no convenient\/simple way to determine ahead of time the number of iterations the loop should run through before terminating. This is exactly a scenario for a while loop. Let's build the function described above.   def my_doubling_function(startingValue):  val = startingValue  while val <= 100:  val = 2*val  return val    Notice that my_doubling_function() does not include a preset number of iterations over which the val = 2*val code in the while loop will be run. At each iteration through the loop, val is checked to see whether it exceeds . As soon as val exceeds , the while loop is terminated. Try running the function with several input different input values. Unfortunately, with a while loop it is possible to find yourself in a scenario where you function loops infinitely, never returning a value, and eventually crashing. Such is the case here if we try evaluating my_doubling_function() with a negative input value.   Putting it all together  In this final, subsection, we'll provide ourselves an opportunity to build a function which explores the Collatz Conjecture. You may have heard of this colloquially as the \" \" conjecture. Below is a video from the Veritasium YouTube channel discussing the conjecture.     The conjecture is simple enough to state. Create a sequence by choosing any positive integer starting value you like. Obtain the next element of the sequence by either dividing by (if the current sequence element is even), or multiplying the current sequence value by and adding . The conjecture claims that no matter your choice of starting value, the resulting sequence will eventually attain a value of , which then results in the sequence repeating forever. Nobody, not even the best mathematicians in the world, has been able to prove or disprove this claim. We can use code to create the sequence of values created by this procedure for a given starting value. It will require several of the ideas we've introduced here.   def collatz_sequence(startVal):  my_sequence = empty list  current_val = startVal  append startVal to my_sequence  while current_val is not 1:  if current_val is divisible by 2:  current_val = current_val \/ 2  else:  current_val = 3*current_val + 1  append current_val to my_sequence  return my_sequence    Try computing the collatz_sequence() for a variety of different startValue s. Do you always end up with a sequence terminating at ? Below is another function containing a for loop which has the ability to call our collatz_sequence() function many times and plot the resulting sequences.    Conclusion  That's it for this section. Hopefully you enjoyed applying our newfound knowledge of logic to code. You saw how the use of if , else if , and else statements combined with conditions can direct the flow of your code. This is powerful because it allows us to run different instructions depending on the state of a parameter within our code. You also saw how we can use looping to run the same set of instructions over and over within a function. We saw that for loops can be used when we know the number of iterations the loop must run ahead of time. If a loop should run an unspecified number of iterations and terminate only when a stopping condition is satisfied, then we should use a while loop. If you decide to complete Project I in the next chapter, you'll have an opportunity to test out what you've learned here.   "
},
{
  "id": "sec_logic-ch-base-conversion-functions",
  "level": "1",
  "url": "sec_logic-ch-base-conversion-functions.html",
  "type": "Section",
  "number": "3.5",
  "title": "Building a Base-Conversion Function",
  "body": " Building a Base-Conversion Function   Note. This section asks you to construct a base-conversion function using computer code. Each task includes a prompt to write pseudocode to construct the corresponding function. The first two such prompts are accompanied by interactive exercises asking you to organize provided pseudocode into an order which will achieve the desired result. Subsequent tasks ask you to write your own pseudocode from scratch. Accompanying each task are also interactive code blocks which invite you to write your own working function in a language of your choice. The existing interactive code blocks allow Sage , Python , and R .  In order to successfully navigate this section, you'll need to recall how base-conversion works (from Chapter 1). You'll also need to use what we learned about logic and how it can be used for programmatic flow control. That is, you'll need to recall what we learned about If\/Then statements. You'll also need to make use of for and while loops. This section is a great opportunity to connect our discrete math content to the topics you've been learning and implementing in your introductory coding course.    Let's start with a function that converts decimal numbers into their corresponding binary representations.   Start with a pseudocode outline for your function. Pseudocode is a very high-level description of the steps a program must complete, beginning with 0 or more inputs, before returning a desired output. Write a pseudocode description of this function.   Write Pseudocode 1 Drag and drop the blocks of pseudocode below to outline a program which will convert a decimal integer into its binary equivalent.   define dec_to_bin(decimal_integer):   int_part = decimal_integer  binary_digits = empty list   while integer_part > 0:    myBit = int_part modulo 2  int_part = floor of (int_part \/ 2)  append myBit to binary_digits list    reverse the binary_digits list  collapse binary_digits list to a string   return binary_digits string    Choose your favorite programming language and try to transform your pseudocode into a working function.       Whether or not you've chosen to build a working version of the function to take a decimal integer and convert it into binary, think about whether your code\/pseudocode will handle special (\"edge\") cases. Is your function capable of converting 0? Can it handle negative integers as inputs? How does your function behave when you pass it a non-integer value as an input? Try updating your code\/pseudocode to handle these things.   Build a function which will convert a bit-string (binary string) to its corresponding decimal representation.   Start with a pseudocode outline for the function.   Write Pseudocode 2 Drag and drop the blocks of pseudocode below to outline a program which will convert an integer from its binary representation to its decimal representation.   define bin_to_dec(bit_string):   bit_list = bitstring as numeric list  reverse order of bit_list  initialize dec_int to 0  n = length(bit_list)   for i in list(0, 1,...,n - 1):   dec_int = dec_int + (bit_list[i]*2^i)  return dec_int    Try taking your pseudocode and implementing it as a working function in your language of choice.       Does your function \"work\" if you accidentally provide it a non-binary input? We better update the function to check this. We don't want users to get an output if they don't provide a valid input. Make the corresponding update to your function.  Does your error check use a separate loop to ensure that the user input is binary? If so, can you make your function more efficient by using just a single loop? NOTE: We'll return to the idea of looping and efficiency later in our course.   Now that you've made it this far, maybe we don't want to restrict ourselves to working only in binary. Make updates to your previous two functions so that they can convert to and from decimal representations and any other base less than 10. HINT: You'll need to allow for users to input both the value to be converted as well as the base you are working with in each function.  Create a new version of your first function which will convert a decimal integer to base- , where .       Create a new version of your second function which will convert an integer written in base- , where , into its decimal representation.       Check to ensure your functions handle \"edge\" cases, like converting 0, dealing with negative integers, and checking to ensure valid inputs before returning a converted value.    You now have all of the tools you need in order to piece together a function that will convert between two bases and , with .  Build a new function, calling the functions you've written so far as helpers, to convert between any two bases (as long as those bases are at most base-10). Your function will need three input values: initial_value , initial_base , and target_base .       As one more challenge, try building a function which will convert a decimal integer value into its hexadecimal representation. You'll get more practice with if \/ else if , and else statements here.     "
},
{
  "id": "Decimal-to-Binary",
  "level": "2",
  "url": "sec_logic-ch-base-conversion-functions.html#Decimal-to-Binary",
  "type": "Checkpoint",
  "number": "3.5.1",
  "title": "Write Pseudocode 1.",
  "body": "Write Pseudocode 1 Drag and drop the blocks of pseudocode below to outline a program which will convert a decimal integer into its binary equivalent.   define dec_to_bin(decimal_integer):   int_part = decimal_integer  binary_digits = empty list   while integer_part > 0:    myBit = int_part modulo 2  int_part = floor of (int_part \/ 2)  append myBit to binary_digits list    reverse the binary_digits list  collapse binary_digits list to a string   return binary_digits string  "
},
{
  "id": "sec_logic-ch-base-conversion-functions-13",
  "level": "2",
  "url": "sec_logic-ch-base-conversion-functions.html#sec_logic-ch-base-conversion-functions-13",
  "type": "Checkpoint",
  "number": "3.5.2",
  "title": "Write Pseudocode 2.",
  "body": "Write Pseudocode 2 Drag and drop the blocks of pseudocode below to outline a program which will convert an integer from its binary representation to its decimal representation.   define bin_to_dec(bit_string):   bit_list = bitstring as numeric list  reverse order of bit_list  initialize dec_int to 0  n = length(bit_list)   for i in list(0, 1,...,n - 1):   dec_int = dec_int + (bit_list[i]*2^i)  return dec_int  "
},
{
  "id": "sec_counting-basics",
  "level": "1",
  "url": "sec_counting-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basic Counting Techniques",
  "body": " Basic Counting Techniques   In this section we discover some fundamental counting techniques which will provide us a foundation to build upon. You'll encounter some scenarios in which addition is utilized to count a number of objects\/possibilities as well as other scenarios in which multiplication is utilized. You'll identify how to determine which approach should be applied in a given scenario and you'll apply your chosen method to carry out the counting.    Counting Outcomes of Atomic Processes  Throughout this short subsection, we'll use the phrase atomic processes to describe processes which cannot be decomposed into smaller, sub-processes. Examples of these atomic processes are the flip of a coin or a roll of a single die. This is as opposed to a more complex process like the rolling of a pair of dice, the flipping of multiple coins, or a combination of die rolls and coin flips. In these more complex cases, we can break the corresponding process into two or more atomic processes . For example, rolling a pair of dice consists of two atomic processes -- the roll of the first die and the roll of the second.  Verify your understanding of atomic processes versus more complex processes by answering the following embedded exercise.  Identifying Atomic Processes   Were you comfortable with classifying those processes? The convenient thing about what we've classified as atomic processes is that the number of outcomes possible from an atomic process is simple to count. Indeed, the number of outcomes possible on a single flip of a coin is two -- we can observe a heads or a tails as the outcome. Verify this by counting the number of outcomes possible for each of the atomic processes in the embedded exercise below.  Counting Outcomes of Atomic Processes   Good work. In the next subsection and the following section in this chapter, we'll use what we know about counting the number of outcomes from atomic processes to help us count the number of outcomes of more complex processes with multiple components.    Near-Atomic Processes: One or the Other(s)  In this subsection, we consider processes which ultimately consist of just a single action but where there is a choice or uncertainty about which action will be taken. For example, we might consider the opportunity to flip a coin or roll of a six-sided die. In this case, we either flipe the coin or roll the die, but we don't do both. In this case, there are two possible outcomes if we flip the coin and an additional six outcomes possible if we roll the die. In total, there are eight (8) outcomes possible from this process.  We consider the process above a near-atomic process because we can't quite break it into smaller sub-processes because only one of these sub-processes will actually be enacted. In this case, the total number of outcomes possible is the sum of the number of outcomes possible from each component process. That is, we obtained 8 total outcomes possible in the example above because there were two outcomes associated with the coin flip and six outcomes associated with the die roll. Since we were either flipping the coin or rolling the die, we added the two totals together.  Test your grasp of what constitutes a near-atomic process by completing this next interactive exercise.  Identifying near-Atomic Processes   Test your understanding of counting the possible number of outcomes from near-atomic processes in the interactive exercise below.  Counting Outcomes of Atomic Processes   As you worked through those last two exercises, make note of where you were confident as well as where you stumbled or were less sure of yourself. Be sure to ask questions on the items where you were less sure of yourself.   Good work through this introductory section on counting. See you in the section, where we'll be introduced to the Fundamental Principle of Counting which will allow us to count the number of outcomes possible for non-atomic, complex processes where the several component processes are all completed. That is, rather than choosing to flip a coin or roll a die, we'll flip the coin and roll the die.  "
},
{
  "id": "sec_counting-basics-3-4",
  "level": "2",
  "url": "sec_counting-basics.html#sec_counting-basics-3-4",
  "type": "Checkpoint",
  "number": "4.1.1",
  "title": "Identifying Atomic Processes.",
  "body": "Identifying Atomic Processes  "
},
{
  "id": "sec_counting-basics-3-6",
  "level": "2",
  "url": "sec_counting-basics.html#sec_counting-basics-3-6",
  "type": "Checkpoint",
  "number": "4.1.2",
  "title": "Counting Outcomes of Atomic Processes.",
  "body": "Counting Outcomes of Atomic Processes  "
},
{
  "id": "sec_counting-basics-4-5",
  "level": "2",
  "url": "sec_counting-basics.html#sec_counting-basics-4-5",
  "type": "Checkpoint",
  "number": "4.1.3",
  "title": "Identifying near-Atomic Processes.",
  "body": "Identifying near-Atomic Processes  "
},
{
  "id": "sec_counting-basics-4-7",
  "level": "2",
  "url": "sec_counting-basics.html#sec_counting-basics-4-7",
  "type": "Checkpoint",
  "number": "4.1.4",
  "title": "Counting Outcomes of Atomic Processes.",
  "body": "Counting Outcomes of Atomic Processes  "
},
{
  "id": "sec_counting-fundamental-principle",
  "level": "1",
  "url": "sec_counting-fundamental-principle.html",
  "type": "Section",
  "number": "4.2",
  "title": "The Fundamental Principle of Counting",
  "body": " The Fundamental Principle of Counting   In this very short section we build on those very small-scale examples in the Counting Basics section and develop the Fundamental Principle of Counting. Like the previous section, we'll develop mastery through a series of examples with increasing level of difficulty.   Motivation  In the previous section, we considered atomic processes, which we described as processes which couldn't be broken down into smaller, sub-processes. Examples of these atomic events were the roll of a single die or the flip of a coin, but not the rolling of a die and flipping of a coin. Indeed, rolling a die and flipping a coin is not an atomic process because it consists of two sub-processes (the rolling of the die and the flipping of the coin). In this section, we consider how to count the number of outcomes possible for this more complex process, and other complex processes too.  Let's start by considering the process of rolling a fair, six-sided die and then flipping a coin, as described above and in the previous section. There are six outcomes possible from the die roll. Those are depicted in the image on the left, below. For each of the six possible outcomes of the die roll, there are two possible outcomes of the coin flip. A tree depicting possible outcomes from the entire process (coin flip and then die roll) appears on the right, below.    A tree of outcomes for a die roll.   A tree showing the six possible outcomes from the roll of a single, six-sided die.      A tree of outcomes for a die roll and subsequent coin flip.   A tree showing the twelve possible outcomes from the roll of a single, six-sided die followed by the flip of a coin.      Notice that for each of the six possible outcomes of the die roll, there are two possible coin flip outcomes. That is, the number of outcomes possible from the die roll and coin flip process is .   The Fundamental Principle of Counting (and Examples)  The multiplicative approach at the end of the previous subsection works in general. The following fact, labeled the Fundamental Principal of Counting, summarizes this idea.   Fundamental Principle of Counting   If is a process consisting of two sub-processes, and , and the number of outcomes from is while the number of possible possible outcomes from is , then the total number of outcomes possible for the process is . Furthermore, if the process consists of subprocesses, , and the number of possible outcomes for is , then the total number of outcomes possible for the entire process is .    Let's work through one example using the Fundamental Principle of Counting and then you'll have an opportunity to test your understanding by completing several embedded examples.   Ordering From a Restaurant  You are out to eat with some friends at a restaurant. This particular restaurant has a relatively small menu, but every order comes with an entree, a drink, and a dessert. The menue has seven different entrees, five different drinks, and four different dessert options. How many different orders are possible?   Notice that there are seven (7) options for an entree, five (5) options for a drink, and four (4) options for dessert. For every choice of entree, there are five options for a drink, and for every combination of entree and drink there are four optons for dessert. Using the Fundamental Principle of Counting, the total number of orders is the product of the number of entrees, number of drinks, and number of desserts. That is, the number of orders is .    Now you try! Use what you've learned to complete the following examples.  Rolling Several Dice  Pizza Shop, Part I  Choosing a PIN (I)  Pizza Shop, Part II The first part of this problem involves the Fundmental Principle of Counting -- use what you know to answer it. We won't cover probability until a later chapter in this book. The probability of an event is the number of ways that event can occur divided by the total number of outcomes possible. Can you use the Fundamental Principle of Counting twice to solve the second part?  Creating \"Words\" from an Alphabet  Choosing a PIN (II)  Race Finishers The first two parts of this problem involve the Fundmental Principle of Counting -- use what you've learned to answer them. We won't cover probability until a later chapter in this book. The probability of an event is the number of ways that event can occur divided by the total number of outcomes possible. Can you use the Fundamental Principle of Counting twice to solve the last part?   In this section, you learned and applied the Fundamental Principle of Counting . This principle allows us to count the number of outcomes (or ways to complete) a process involving multiple sub-processes. Once we know the number of outcomes possible for each sub-process, then we just multiply these values together to obtain the total number of outcomes possible for the overall process. In each of the next two sections, we'll be formally introduced to a new tool for computing the number of outcomes of a complex process. In the next section, we'll discover a technique for counting the number of permutations (orderings) of a subset of elements taken from a collection. In the section that follows that one, we'll see a method for counting the number of ways to select a subset from a larger collection of objects (where the order of selection does not matter). Perhaps more simply put, the next section will expose us to counting arrangements and the section that follows will show us how to count selections . We'll see you there!  "
},
{
  "id": "sec_counting-fundamental-principle-3-4-1",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-3-4-1",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " A tree of outcomes for a die roll.   A tree showing the six possible outcomes from the roll of a single, six-sided die.    "
},
{
  "id": "sec_counting-fundamental-principle-3-4-2",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-3-4-2",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " A tree of outcomes for a die roll and subsequent coin flip.   A tree showing the twelve possible outcomes from the roll of a single, six-sided die followed by the flip of a coin.    "
},
{
  "id": "sec_counting-fundamental-principle-4-3",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-3",
  "type": "Fact",
  "number": "4.2.3",
  "title": "Fundamental Principle of Counting.",
  "body": " Fundamental Principle of Counting   If is a process consisting of two sub-processes, and , and the number of outcomes from is while the number of possible possible outcomes from is , then the total number of outcomes possible for the process is . Furthermore, if the process consists of subprocesses, , and the number of possible outcomes for is , then the total number of outcomes possible for the entire process is .   "
},
{
  "id": "restaurant-order-ex",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#restaurant-order-ex",
  "type": "Example",
  "number": "4.2.4",
  "title": "Ordering From a Restaurant.",
  "body": " Ordering From a Restaurant  You are out to eat with some friends at a restaurant. This particular restaurant has a relatively small menu, but every order comes with an entree, a drink, and a dessert. The menue has seven different entrees, five different drinks, and four different dessert options. How many different orders are possible?   Notice that there are seven (7) options for an entree, five (5) options for a drink, and four (4) options for dessert. For every choice of entree, there are five options for a drink, and for every combination of entree and drink there are four optons for dessert. Using the Fundamental Principle of Counting, the total number of orders is the product of the number of entrees, number of drinks, and number of desserts. That is, the number of orders is .   "
},
{
  "id": "sec_counting-fundamental-principle-4-7",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-7",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "Rolling Several Dice.",
  "body": "Rolling Several Dice "
},
{
  "id": "sec_counting-fundamental-principle-4-8",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-8",
  "type": "Checkpoint",
  "number": "4.2.6",
  "title": "Pizza Shop, Part I.",
  "body": "Pizza Shop, Part I "
},
{
  "id": "sec_counting-fundamental-principle-4-9",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-9",
  "type": "Checkpoint",
  "number": "4.2.7",
  "title": "Choosing a PIN (I).",
  "body": "Choosing a PIN (I) "
},
{
  "id": "sec_counting-fundamental-principle-4-10",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-10",
  "type": "Checkpoint",
  "number": "4.2.8",
  "title": "Pizza Shop, Part II.",
  "body": "Pizza Shop, Part II The first part of this problem involves the Fundmental Principle of Counting -- use what you know to answer it. We won't cover probability until a later chapter in this book. The probability of an event is the number of ways that event can occur divided by the total number of outcomes possible. Can you use the Fundamental Principle of Counting twice to solve the second part? "
},
{
  "id": "sec_counting-fundamental-principle-4-11",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-11",
  "type": "Checkpoint",
  "number": "4.2.9",
  "title": "Creating \"Words\" from an Alphabet.",
  "body": "Creating \"Words\" from an Alphabet "
},
{
  "id": "sec_counting-fundamental-principle-4-12",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-12",
  "type": "Checkpoint",
  "number": "4.2.10",
  "title": "Choosing a PIN (II).",
  "body": "Choosing a PIN (II) "
},
{
  "id": "sec_counting-fundamental-principle-4-13",
  "level": "2",
  "url": "sec_counting-fundamental-principle.html#sec_counting-fundamental-principle-4-13",
  "type": "Checkpoint",
  "number": "4.2.11",
  "title": "Race Finishers.",
  "body": "Race Finishers The first two parts of this problem involve the Fundmental Principle of Counting -- use what you've learned to answer them. We won't cover probability until a later chapter in this book. The probability of an event is the number of ways that event can occur divided by the total number of outcomes possible. Can you use the Fundamental Principle of Counting twice to solve the last part? "
},
{
  "id": "sec_counting-permutations",
  "level": "1",
  "url": "sec_counting-permutations.html",
  "type": "Section",
  "number": "4.3",
  "title": "Arrangements and Permutations",
  "body": " Arrangements and Permutations   In this section we encounter methods for counting the number of arrangements (or orderings ) of items selected from a collection of options. Unlike the previous section, we do not allow items to be selected more than once here. You might think of choosing the way in which people line up for a photograph as your paradigm here. In fact, that's the context with which we'll motivate our discussion below.   Motivation  Consider the context of families lining up for a wedding photo. The bride's family has 5 people (including her) and the goom's family has 4 people (including him). Perhaps we want to know the total number of ways these individuals could line up (left to right) for a photograph.  There are lots of restrictions we could impose on the ordering. Let's see several examples below.   A Wedding Photo, Part I  The families described above would like to line up to take a photograph together. In the spirit of the marriage and becoming one large family, there are no restrictions on the lineup and who is standing next to one another. In how many ways can the individuals in this photo be arranged from left to right?  Notice that there will be 9 total people in the photograph -- the five total members of the bride's family and the four total members of the groom's family. We can think of the photo lineup using the \"picture\" below.   Because nobody has been positioned yet, there are 9 individuals who could be placed into the left-most position.   Once that first person has been placed, there are only eight individuals left to position. That is, for any choice of the person to place into the leftmost position, there are eight choices of person to place next to them. The Fundamental Principle of Counting then suggests that there are ways to arrange people into the two leftmost positions.   Continuing in this fashion, there are seven individuals to place in the next position, followed by six for the one after, continuing on until we are left with only the last person to place into that final position.   Multiplying, we obtain total arrangements for that one photo!    Factorial  The product used above is a type of product that appears so often in mathematics that it is given a special name and notation. That product can be read as 9 factorial and is often denoted as . In general, n factorial is written as    Let's explore some more restrictive versions of our wedding photo arrangement.  Wedding Photo, Part II  Assume that we want a photo where the bride and groom are positioned in the center of the photo, with the groom to the left of the bride, the groom's family to the left of the groom, and the bride's family to the right of the bride. How many different arrangements of the individuals for the photo satisfy these requirements?  This photograph is more restrictive than the previous one. Because of this we should expect that there are fewer arrangements resulting in an acceptable photo. Since the groom's family should be to the left of the groom and the bride's family to the right of the bride, we know that the groom must occupy the position fourth from the left and the bride must occupy the position fifth from the left. Let's start with such an arrangement. We'll let G stand for the groom and B stand for the bride.   Notice that there is no choice in the placement we just made. There is exactly one way to have the groom occupy the fourth position from the left and the bride occupy the fifth position. We do have some choice in how to fill in the remaining positions though.   Now, since there are three remaining members of the groom's family, we have three options for who will occupy the leftmost position, two who will occupy the next position and then the final member of the groom's family will fill in the position just to the left of the groom.   Similarly, we can fill in the positions to the right of the bride. We need only remember that there are four additional members of her family.   Recalling that there was no choice in how the bride and groom were positioned, we use the Fundamental Principle of Counting to compute the total number of arrangements for the photo.   Adding those additional restrictions drastically reduced the number of acceptable arrangements for the photo. We went from arrangements for the unrestriced photo to only arrangements for the photo with these restrictions!    What if not everyone needs to be in the photo? Perhaps the photographer wants a random subset of six individuals for the photo. Consider the example below, which introduces the notion of permutations . After this, you'll have an opportunity to practice what you've learned!  Wedding Photo, Part III  The wedding photographer has set up a photo booth which can accommodate six people at a time. In how many ways can six members of the wedding party arrange themselves (left to right) for a photo in the photo booth?  While there aren't positional restrictions on this photo, there is a size restriction. Not all of the nine family members will be able to be in the picture. That being said, the approach is still the same. We have six positions to fill.   We'll fill each of the positions above. All nine of the family members are available to fill the leftmost position.   Once the family member has been chosen to take the leftmost position, there are eight faily members available for the next, and so on until all of the positions have been filled.   Notice that all of the positions for the photo have been filled. The remaining three family members will not be in the photo, so their positional order does not matter. The total number of arrangements for a family photo in the photo booth are   That is, there are 60,480 different arrangements for the photo booth photo which will include six of the nine family members.    As with factorials, the type of product we used above (a factorial with its tail end cut off) appears commonly in mathematics and is referred to as a permutation . A definition appears below.  Permutation  A permutation of elements from a collection of size , where , counts the number of ways to arrange (order) those elements. The notation and definition for a permutation of elements from a collection of appears below:     Interactive Examples Involving Permutations  Now that you've seen a few examples and have been exposed to the notion of factorials and permutations, use what you've learned to solve the embedded exercises below.   "
},
{
  "id": "photo-lineup-ex",
  "level": "2",
  "url": "sec_counting-permutations.html#photo-lineup-ex",
  "type": "Example",
  "number": "4.3.1",
  "title": "A Wedding Photo, Part I.",
  "body": " A Wedding Photo, Part I  The families described above would like to line up to take a photograph together. In the spirit of the marriage and becoming one large family, there are no restrictions on the lineup and who is standing next to one another. In how many ways can the individuals in this photo be arranged from left to right?  Notice that there will be 9 total people in the photograph -- the five total members of the bride's family and the four total members of the groom's family. We can think of the photo lineup using the \"picture\" below.   Because nobody has been positioned yet, there are 9 individuals who could be placed into the left-most position.   Once that first person has been placed, there are only eight individuals left to position. That is, for any choice of the person to place into the leftmost position, there are eight choices of person to place next to them. The Fundamental Principle of Counting then suggests that there are ways to arrange people into the two leftmost positions.   Continuing in this fashion, there are seven individuals to place in the next position, followed by six for the one after, continuing on until we are left with only the last person to place into that final position.   Multiplying, we obtain total arrangements for that one photo!   "
},
{
  "id": "sec_counting-permutations-3-5",
  "level": "2",
  "url": "sec_counting-permutations.html#sec_counting-permutations-3-5",
  "type": "Definition",
  "number": "4.3.2",
  "title": "Factorial.",
  "body": "Factorial  The product used above is a type of product that appears so often in mathematics that it is given a special name and notation. That product can be read as 9 factorial and is often denoted as . In general, n factorial is written as   "
},
{
  "id": "sec_counting-permutations-3-7",
  "level": "2",
  "url": "sec_counting-permutations.html#sec_counting-permutations-3-7",
  "type": "Example",
  "number": "4.3.3",
  "title": "Wedding Photo, Part II.",
  "body": "Wedding Photo, Part II  Assume that we want a photo where the bride and groom are positioned in the center of the photo, with the groom to the left of the bride, the groom's family to the left of the groom, and the bride's family to the right of the bride. How many different arrangements of the individuals for the photo satisfy these requirements?  This photograph is more restrictive than the previous one. Because of this we should expect that there are fewer arrangements resulting in an acceptable photo. Since the groom's family should be to the left of the groom and the bride's family to the right of the bride, we know that the groom must occupy the position fourth from the left and the bride must occupy the position fifth from the left. Let's start with such an arrangement. We'll let G stand for the groom and B stand for the bride.   Notice that there is no choice in the placement we just made. There is exactly one way to have the groom occupy the fourth position from the left and the bride occupy the fifth position. We do have some choice in how to fill in the remaining positions though.   Now, since there are three remaining members of the groom's family, we have three options for who will occupy the leftmost position, two who will occupy the next position and then the final member of the groom's family will fill in the position just to the left of the groom.   Similarly, we can fill in the positions to the right of the bride. We need only remember that there are four additional members of her family.   Recalling that there was no choice in how the bride and groom were positioned, we use the Fundamental Principle of Counting to compute the total number of arrangements for the photo.   Adding those additional restrictions drastically reduced the number of acceptable arrangements for the photo. We went from arrangements for the unrestriced photo to only arrangements for the photo with these restrictions!   "
},
{
  "id": "sec_counting-permutations-3-9",
  "level": "2",
  "url": "sec_counting-permutations.html#sec_counting-permutations-3-9",
  "type": "Example",
  "number": "4.3.4",
  "title": "Wedding Photo, Part III.",
  "body": "Wedding Photo, Part III  The wedding photographer has set up a photo booth which can accommodate six people at a time. In how many ways can six members of the wedding party arrange themselves (left to right) for a photo in the photo booth?  While there aren't positional restrictions on this photo, there is a size restriction. Not all of the nine family members will be able to be in the picture. That being said, the approach is still the same. We have six positions to fill.   We'll fill each of the positions above. All nine of the family members are available to fill the leftmost position.   Once the family member has been chosen to take the leftmost position, there are eight faily members available for the next, and so on until all of the positions have been filled.   Notice that all of the positions for the photo have been filled. The remaining three family members will not be in the photo, so their positional order does not matter. The total number of arrangements for a family photo in the photo booth are   That is, there are 60,480 different arrangements for the photo booth photo which will include six of the nine family members.   "
},
{
  "id": "sec_counting-permutations-3-11",
  "level": "2",
  "url": "sec_counting-permutations.html#sec_counting-permutations-3-11",
  "type": "Definition",
  "number": "4.3.5",
  "title": "Permutation.",
  "body": "Permutation  A permutation of elements from a collection of size , where , counts the number of ways to arrange (order) those elements. The notation and definition for a permutation of elements from a collection of appears below:   "
},
{
  "id": "sec_counting-big-O",
  "level": "1",
  "url": "sec_counting-big-O.html",
  "type": "Section",
  "number": "4.4",
  "title": "Complexity and Big-O Notation",
  "body": " Complexity and Big-O Notation   In this section we apply our knowledge of looping and counting to develop the notion of big-O notation. We'll look at routines which accept an array as input and explore the growth in the number of operations run during execution of the routine as the size of the input array grows. In particular, we'll see applications which are , , , and .  We'll consider only run-time complexity in this section, though students should also know that space-complexity is a competing concern when writing code to solve problems. Students in computing disciplines will encounter both run-time- and space-complexity throughout their studies.   About. In this section, it is necessary to provide definitions of example routines. The routines are not written in any particular language -- in fact, most won't work in any language as you see them written here. Instead, the routines are provided via some pseudocode -- something about halfway between human preferrable and computer readable. Since we are working with arrays, it is useful to have some convention about how to access individual array elements. Throughout this section, we use myArray[0] to access the element in the left-most slot of the myArray object. We use myArray[i] to access the element in the slot of myArray , remembering that the left-most item occupies the slot of myArray .  Indexing from 0 may seem awkward to those of you who are just beginning your computing careers, but this is the case for many of the most popular computing languages. For this reason, we adopt 0-based indexing here.  Complete the following checkpoint exercises to gain some familiarity with analyzing operations within a function. For reasons that will become clear later in the section, you'll be asked to ignore any \"operations\" required to initialize variables, initialize a loop, or return a result back to the computing environment. Additionally, you can consider lines combining arithmetic operations and updating a stored value to be a single operation. That is, x = x + i can be considered a single operation in the checkpoint items below. The reason we can do this will be addressed when big-O notation is introduced later in the section.  Operations to Return First Element  Answer the following.   Operations to Sum First Five Elements  Answer the following.   Operations to Sum First Elements  Answer the following.   Operations to Sum All Elements  Answer the following.   Note that in the first three interactive problems above, the size of the input array didn't matter. That is, number of operations required to arrive at the value to be returned did not depend on the length of the input array. If you didn't notice that on your own, try regenerating new versions of the embedded examples and working through the examples again. In the final example, however, the number of operations required to complete before arriving at the value to be returned did depend on the length of the input array. Input arrays with more elements require more calculations, and so it should be expected that, as this sum_array_values() routine is applied to larger and larger arrays, it takes longer to run. How much longer run-time should we expect if the length of the input array were to, let's say, double in length? Should we expect the routine to take approximately twice as long? More time? Less than that? How can we tell? This is the job of big-O notation.  Consider a routine which takes an array as input and then produces some output. The run-time complexity of the algorithm describes the order of the number of operations to be done in transforming the input array into the output, as a function of the length of the input array. Traditionally, the run-time complexity has been written using big-O notation, which looks like , where is a function of the length of the input array. We'll see some examples below.   Run-Time Complexity 1  Consider the routine below, which takes in an array as input and returns the value of the first element of the array. Describe the run-time of the routine as a function of the size of the input array .  def return_first(array): return array[0]  Note that the routine immediately returns the first element of the array, regardless of the size of the input array. There is a single operation being done here, no matter what non-empty array is supplied as the input. This means that the routine in question has constant runtime. We say that the routine is .  Let's see another example in which more than just a single operation is required to transform the input array into the output.  Run-Time Complexity 2  Consider the routine below, which takes in an array as input and returns the sum of the first two array elements. Describe the run-time of the routine as a function of the size of the input array .  def sum_first_two(array): a = array[0] b = array[1] total = a + b return total  Note that the routine uses three operations in order to transform the input array into the value which is returned. First, the item in array[0] is stored in the variable . Next, the intem in array[1] is stored in the variable . Finally, the sum, is stored in the total variable, which is the value to be returned. Three operations are being completed here, so we might say that this routine has run-time complexity . The attentive reader may ask why this routine is not because of the return statement. In short, we shouldn't waste time making a distinction because, regardless of whether we consider return ing a value to be an operation or not, this routine has constant run-time. That is, this routine is also .   We saw in the previous example that there is no distinction made between and , or even , for that matter. All of these denote constant run-time, and so their big-O description of complexity is . We say that such routines have constant run-time , since the time required to run the routine does not change as the size of the input array changes.  Let's see how the run-time complexity grows for some more interesting routines in the examples below.   Run-Time Complexity 3  Consider the routine below, which takes in an array as input and returns the product of all the array elements. Describe the run-time of the routine as a function of the size of the input array .  def array_product(array): myProd = 1 for element in array: myProd = myProd*element return myProd   The presence of the loop here has the potential to result in run times that are related to the size of the input array . There is a single operation being done within the body of the for loop. That is, the body of the loop has run-time. The loop will run once for each element in the input array . Let's label the number of elements in the input array by . We'll ignore accounting for the \"operations\" of setting up the loop and return ing the result, but there is the operation required to initialize the myProd variable which we will account for.  Given the analysis above, the total run-time for this routine is . When analyzing the run-time complexity of a routine, we are looking to identify the bottlenecks in our code. This means that we care only about the part of the code whose run-time grows the fastest. For this reason, we identify the highest-order term in our analysis and throw away all of the others (since for very large input arrays, the lower-order terms will have diminished impact on the observed run-time). This leaves us with      Run-Time Complexity 4  Consider the routine below, which takes in an array as input and returns a value computed using the values from the input array . Describe the run-time of the routine as a function of the size of the input array .  def array_product_difference(array): myValue = 1 for element in array: myValue = myValue - element myValue = myValue * element return myValue   Again, the presence of the loop here has the potential to result in run times that are related to the size of the input array . There are two operations being done within the body of the for loop. That is, the body of the loop has run-time. The loop will run once for each element in the input array . Again, we'll label the number of elements in the input array by . As usual, we'll ignore accounting for the \"operations\" of setting up the loop and return ing the result, but we account for the operation to initialize the myValue variable. The run-time is then   In the last line from the string of equalities above, we dropped the constant from . This wasn't simply a typo, and the rationale for doing so is similar to the rationale for omitting any constant run-time elements from the overall description of the run-time of the entire routine.    NOTE: Need to decide whether setting up a loop or returning values should be counted as an \"operation\" in determining the run-time complexities -- I'll reach out to the CS department about the choice they currently make in Analysis of Algorithms.   Run-Time Complexity 5  Consider the routine below, which takes in an array as input and returns a value of TRUE if there exist elements a , b , and c in the array such that a*b = c , and returns FALSE otherwise. Describe the run-time of the routine as a function of the size of the input array .  def detect_product(array): for element_a in array: for element_b in array: for element_c in array: if element_a*element_b == element_c: return TRUE return FALSE   In the routine defined above, we should note that once a program reaches a return statement, the corresponding value is returned and the routine terminates. When we are analyzing run-time complexity, we always consider a \"worst-case\" scenario for run-time. Given the routine above, a worst-case is that no such trio of array elements are found. As a result, the routine must run completely over the entire array before returning FALSE . In such a scenario, we have   This routine, as coded here, has a run-time of . This means that if we double the length of the input array, say from to , the routine is expected to take about longer to run.    To recap from the examples above, we use big-O notation to describe the run-time of a routine as a function of the length of its input array. Big-O notation allows us to answer the question \" How would our run-time change if the size of our input array was doubled? \". If the length of an input array was doubled, we have the following expected changes in run-times.  For an routine, the expected run time does not change.  For an routine, the expected run time is approximately doubled.  For an routine, the expected run time is approximately four times longer.  For an routine, the expected run time is approximately eight times longer.  There are routines which have run-time complexities which are between constant and linear. For example, some routines have run-time. We'll see some later in our course. There are also routines which don't have polynomial run-time. They may be exponential -- for example -- or factorial , . In general, we desire routines which are more efficient -- that is, routines with lower-order run-time complexities -- because they are faster. However, there is sometimes a tradeoff between run-time complexity and space-complexity. What good is a fast algorithm if requires more memory than you have access to?  Complete the examples below to verify your grasp of algorithmic complexity and big-O notation. Please note that the algorithms are written in pseudocode, and the algorithms don't necessarily claim to solve their corresponding challenge in the most efficient manner possible. Your answers should describe the algorithmic complexity of the routines as written in the sample problems. Interested readers may try writing working versions of these routines in a language of their choice, and are invited to think about optimizing the algorithms.  Big-O Analysis 1  Answer the following.   Big-O Analysis 2  Answer the following.   Big-O Analysis 3  Answer the following.   Big-O Analysis 4  Answer the following.   Big-O Analysis 5  Answer the following. This one is challenging.   "
},
{
  "id": "sec_counting-big-O-6",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-6",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "Operations to Return First Element.",
  "body": "Operations to Return First Element  Answer the following.  "
},
{
  "id": "sec_counting-big-O-7",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-7",
  "type": "Checkpoint",
  "number": "4.4.2",
  "title": "Operations to Sum First Five Elements.",
  "body": "Operations to Sum First Five Elements  Answer the following.  "
},
{
  "id": "sec_counting-big-O-8",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-8",
  "type": "Checkpoint",
  "number": "4.4.3",
  "title": "Operations to Sum First Elements.",
  "body": "Operations to Sum First Elements  Answer the following.  "
},
{
  "id": "sec_counting-big-O-9",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-9",
  "type": "Checkpoint",
  "number": "4.4.4",
  "title": "Operations to Sum All Elements.",
  "body": "Operations to Sum All Elements  Answer the following.  "
},
{
  "id": "return-first",
  "level": "2",
  "url": "sec_counting-big-O.html#return-first",
  "type": "Example",
  "number": "4.4.5",
  "title": "Run-Time Complexity 1.",
  "body": " Run-Time Complexity 1  Consider the routine below, which takes in an array as input and returns the value of the first element of the array. Describe the run-time of the routine as a function of the size of the input array .  def return_first(array): return array[0]  Note that the routine immediately returns the first element of the array, regardless of the size of the input array. There is a single operation being done here, no matter what non-empty array is supplied as the input. This means that the routine in question has constant runtime. We say that the routine is .  "
},
{
  "id": "return-sum-first-two",
  "level": "2",
  "url": "sec_counting-big-O.html#return-sum-first-two",
  "type": "Example",
  "number": "4.4.6",
  "title": "Run-Time Complexity 2.",
  "body": " Run-Time Complexity 2  Consider the routine below, which takes in an array as input and returns the sum of the first two array elements. Describe the run-time of the routine as a function of the size of the input array .  def sum_first_two(array): a = array[0] b = array[1] total = a + b return total  Note that the routine uses three operations in order to transform the input array into the value which is returned. First, the item in array[0] is stored in the variable . Next, the intem in array[1] is stored in the variable . Finally, the sum, is stored in the total variable, which is the value to be returned. Three operations are being completed here, so we might say that this routine has run-time complexity . The attentive reader may ask why this routine is not because of the return statement. In short, we shouldn't waste time making a distinction because, regardless of whether we consider return ing a value to be an operation or not, this routine has constant run-time. That is, this routine is also .  "
},
{
  "id": "return-product-all",
  "level": "2",
  "url": "sec_counting-big-O.html#return-product-all",
  "type": "Example",
  "number": "4.4.7",
  "title": "Run-Time Complexity 3.",
  "body": " Run-Time Complexity 3  Consider the routine below, which takes in an array as input and returns the product of all the array elements. Describe the run-time of the routine as a function of the size of the input array .  def array_product(array): myProd = 1 for element in array: myProd = myProd*element return myProd   The presence of the loop here has the potential to result in run times that are related to the size of the input array . There is a single operation being done within the body of the for loop. That is, the body of the loop has run-time. The loop will run once for each element in the input array . Let's label the number of elements in the input array by . We'll ignore accounting for the \"operations\" of setting up the loop and return ing the result, but there is the operation required to initialize the myProd variable which we will account for.  Given the analysis above, the total run-time for this routine is . When analyzing the run-time complexity of a routine, we are looking to identify the bottlenecks in our code. This means that we care only about the part of the code whose run-time grows the fastest. For this reason, we identify the highest-order term in our analysis and throw away all of the others (since for very large input arrays, the lower-order terms will have diminished impact on the observed run-time). This leaves us with    "
},
{
  "id": "return-product-difference",
  "level": "2",
  "url": "sec_counting-big-O.html#return-product-difference",
  "type": "Example",
  "number": "4.4.8",
  "title": "Run-Time Complexity 4.",
  "body": " Run-Time Complexity 4  Consider the routine below, which takes in an array as input and returns a value computed using the values from the input array . Describe the run-time of the routine as a function of the size of the input array .  def array_product_difference(array): myValue = 1 for element in array: myValue = myValue - element myValue = myValue * element return myValue   Again, the presence of the loop here has the potential to result in run times that are related to the size of the input array . There are two operations being done within the body of the for loop. That is, the body of the loop has run-time. The loop will run once for each element in the input array . Again, we'll label the number of elements in the input array by . As usual, we'll ignore accounting for the \"operations\" of setting up the loop and return ing the result, but we account for the operation to initialize the myValue variable. The run-time is then   In the last line from the string of equalities above, we dropped the constant from . This wasn't simply a typo, and the rationale for doing so is similar to the rationale for omitting any constant run-time elements from the overall description of the run-time of the entire routine.   "
},
{
  "id": "return-check-product",
  "level": "2",
  "url": "sec_counting-big-O.html#return-check-product",
  "type": "Example",
  "number": "4.4.9",
  "title": "Run-Time Complexity 5.",
  "body": " Run-Time Complexity 5  Consider the routine below, which takes in an array as input and returns a value of TRUE if there exist elements a , b , and c in the array such that a*b = c , and returns FALSE otherwise. Describe the run-time of the routine as a function of the size of the input array .  def detect_product(array): for element_a in array: for element_b in array: for element_c in array: if element_a*element_b == element_c: return TRUE return FALSE   In the routine defined above, we should note that once a program reaches a return statement, the corresponding value is returned and the routine terminates. When we are analyzing run-time complexity, we always consider a \"worst-case\" scenario for run-time. Given the routine above, a worst-case is that no such trio of array elements are found. As a result, the routine must run completely over the entire array before returning FALSE . In such a scenario, we have   This routine, as coded here, has a run-time of . This means that if we double the length of the input array, say from to , the routine is expected to take about longer to run.   "
},
{
  "id": "sec_counting-big-O-22",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-22",
  "type": "Checkpoint",
  "number": "4.4.10",
  "title": "Big-O Analysis 1.",
  "body": "Big-O Analysis 1  Answer the following.  "
},
{
  "id": "sec_counting-big-O-23",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-23",
  "type": "Checkpoint",
  "number": "4.4.11",
  "title": "Big-O Analysis 2.",
  "body": "Big-O Analysis 2  Answer the following.  "
},
{
  "id": "sec_counting-big-O-24",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-24",
  "type": "Checkpoint",
  "number": "4.4.12",
  "title": "Big-O Analysis 3.",
  "body": "Big-O Analysis 3  Answer the following.  "
},
{
  "id": "sec_counting-big-O-25",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-25",
  "type": "Checkpoint",
  "number": "4.4.13",
  "title": "Big-O Analysis 4.",
  "body": "Big-O Analysis 4  Answer the following.  "
},
{
  "id": "sec_counting-big-O-26",
  "level": "2",
  "url": "sec_counting-big-O.html#sec_counting-big-O-26",
  "type": "Checkpoint",
  "number": "4.4.14",
  "title": "Big-O Analysis 5.",
  "body": "Big-O Analysis 5  Answer the following. This one is challenging.  "
},
{
  "id": "ch-functions",
  "level": "1",
  "url": "ch-functions.html",
  "type": "Chapter",
  "number": "5",
  "title": "Functions",
  "body": "  Functions     In progress. This chapter will eventually include the following sections.  Functions and Their Properties  Composition of Functions and Invertibility            "
},
{
  "id": "ch-probability",
  "level": "1",
  "url": "ch-probability.html",
  "type": "Chapter",
  "number": "6",
  "title": "Probability",
  "body": "  Probability     In progress. This chapter will eventually include the following sections.  Counting and Discrete Probabilities  Discrete Probability Distributions  Queueing            "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays",
  "level": "1",
  "url": "sec_arrays-ch-one-dimensional-arrays.html",
  "type": "Section",
  "number": "7.1",
  "title": "One-Dimensional Arrays",
  "body": " One-Dimensional Arrays   As a reminder, an array is a structure for storing several data values, as long as those values all share the same data type. It is common to refer to one-dimensional arrays as vectors , though the term \"vector\" has a special meaning in physics and engineering.   Addition and Scalar Multiplication  A one-dimensional array looks a lot like a list of values. For example, myFirstArray = [1, 5, 9, -11] is a one-dimensional array with four elements while mySecondArray = [1.5, -2.8, 3] is a one-dimensional array with three elements. In the two examples, myFirstArray is an array of integer values, while mySecondArray is an array of floats. Perhaps you remember from our first chapter that there are different memory requirements for integers versus floats, and that can sometimes make a big difference in our programs.  Addition and subtraction between arrays is done elementwise . For example, we can add the two arrays [1, 6, 3] and [5, 11, 2] as follows. Subtraction between those two arrays is done similarly.   A scalar is a quantity which has only a magnitude. For example, the value is considered a scalar, while may be considered a one-dimensional array containing a single element. We can multiply arrays by a scalar value. To do this, each element of the array is multiplied by the scalar. For example, let's multiply the array [2, 12, -64, 32, 18] by the scalar .   Use what you've learned to verify your grasp of addition, subtraction, and scalar multiplication for one-dimensional arrays.  Array Addition\/Subtraction   Scalar Multiplication   At the end of our chapter on counting, we encountered big-O notation and its use in describing the run-time complexity of a routine, algorithm, or program. Answer the following questions about the run-time complexity of array addition and scalar multiplication.  Array Addition Complexity   Scalar Multiplication Complexity    Inner-products  In addition to adding\/subtracting arrays or multiplying arrays by scalars, there's lots of interesting and meaningful operations that can be done with arrays. We'll take a look at one of them, called the inner-product in this section. Our section will end by mentioning the outer-product , but we'll need to wait until we see two-dimensional arrays before we can compute that.  Given two arrays of equal length, we can calculate the inner-product between them. We'll introduce the inner-product algorithmically using the pseudocode below.   def inner_product(myArray1, myArray2):  n = length(myArray1)  if length(myArray2) not equal n:  print(\"Arrays must be the same length\")  return NULL  inner_prod = 0  for i in [0, 1, ..., n - 1]:  inner_prod = inner_prod + (myArray1[i] * myArray2[i])  return inner_prod   Answer the following regarding the run-time complexity of the following implementation to compute the inner product between two arrays.  Inner Product Complexity   Now try the following examples for computing the inner product between two arrays on your own.  Compute Inner Product 1   Compute Inner Product 1   Compute Inner Product 1   Another type of array product is the outer-product . Given two one-dimensional arrays, we can define the outer product between them. The outer-product, however, results in a two-dimensional array. If array1 and array2 are arrays of length and respectively, then the outer product between array1 and array2 is an array. Note that this also means that inner_product(array1, array2) is generally not the same as inner_product(array2, array1) . We'll see how to compute the inner product in our next section.   "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-3-6",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-3-6",
  "type": "Checkpoint",
  "number": "7.1.1",
  "title": "Array Addition\/Subtraction.",
  "body": "Array Addition\/Subtraction  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-3-7",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-3-7",
  "type": "Checkpoint",
  "number": "7.1.2",
  "title": "Scalar Multiplication.",
  "body": "Scalar Multiplication  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-3-9",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-3-9",
  "type": "Checkpoint",
  "number": "7.1.3",
  "title": "Array Addition Complexity.",
  "body": "Array Addition Complexity  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-3-10",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-3-10",
  "type": "Checkpoint",
  "number": "7.1.4",
  "title": "Scalar Multiplication Complexity.",
  "body": "Scalar Multiplication Complexity  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-4-6",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-4-6",
  "type": "Checkpoint",
  "number": "7.1.5",
  "title": "Inner Product Complexity.",
  "body": "Inner Product Complexity  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-4-8",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-4-8",
  "type": "Checkpoint",
  "number": "7.1.6",
  "title": "Compute Inner Product 1.",
  "body": "Compute Inner Product 1  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-4-9",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-4-9",
  "type": "Checkpoint",
  "number": "7.1.7",
  "title": "Compute Inner Product 1.",
  "body": "Compute Inner Product 1  "
},
{
  "id": "sec_arrays-ch-one-dimensional-arrays-4-10",
  "level": "2",
  "url": "sec_arrays-ch-one-dimensional-arrays.html#sec_arrays-ch-one-dimensional-arrays-4-10",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "Compute Inner Product 1.",
  "body": "Compute Inner Product 1  "
},
{
  "id": "sec_arrays-ch-matrices",
  "level": "1",
  "url": "sec_arrays-ch-matrices.html",
  "type": "Section",
  "number": "7.2",
  "title": "Two-Dimensional Arrays (Matrices)",
  "body": " Two-Dimensional Arrays (Matrices)   We ended our last section by mentioning the outer-product between two arrays. Unlike the inner-product, the outer-product is defined even between arrays whose lengths do not match. Before we return to the definition of the outer-product, let's take a look at two-dimensional arrays, which are often referred to as matrices.   What is a two-dimensional array?  A matrix is a two-dimensional array. That is, a matrix is an array which has both rows and columns. An example of a two-by-three matrix appears below.   Seeing the form of a general ( by ) matrix gives a bit of insight as to how matrix elements are organized and how they can be accessed in a computing environment. An matrix is a two-dimensional array with rows and columns. The general from of an matrix appears below.   From the definition above, we can see that the element occupies the position in row and column . This insight allows us to access matrix elements through code. The following example of an algorithm to convert a list to a matrix shows how accessing elements of a two-dimensional array can be done.   def list_to_matrix(myList, rows):  list_length = length(myList)  if (rows does not divide list_length):  print(\"Warning: number of rows must divide the length of the list\")  return NULL   columns = list_length \/ rows  myMatrix = a rows x columns array  list_counter = 0   for row in [0, 1, ..., rows - 1]:  for column in [0, 1, ..., columns - 1]:  myMatrix[row, column] = myList[list_counter]  list_counter = list_counter + 1   return myMatrix   Notice the use of the nested for loops to move throw the row and column combinations. Complete the exercise below to determine the run-time complexity of the list_to_matrix() algorithm proposed above.  List to Matrix Complexity    Matrix Addition\/Subtraction  Now that we know how matrices are constructed, we can think about operations with these two-dimensional structures. Just like with one-dimensional arrays, matrix addition and subtraction is done element-wise. This requires that two matrices have the same dimensions (the same number of rows and same number of columns) as one another in order to add or subtract the two objects. An algorithm to define matrix addition appears below.   def matrix_sum(myMatrix1, myMatrix2):  rows_matrix1 = number of rows in myMatrix1  rows_matrix2 = number of rows in muMatrix2  cols_matrix1 = number of columns in myMatrix1  cols_matrix2 = number of columns in muMatrix2  if (rows_matrix1 not equal to rows_matrix2) or (cols_matrix1 not equal to cols_matrix2):  print(\"Warning: matrix dimensions don't match\")  return NULL   sumMatrix = a rows_matrix1 x cols_matrix1 array   for row in [0, 1, ..., rows_matrix1 - 1]:  for column in [0, 1, ..., cols_matrix1 - 1]:  sumMatrix[row, column] = myMatrix1[row, column] + myMatrix2[row, column]   return sumMatrix   Complete the exercise below to determine the run-time complexity of the matrix_sum() algorithm outlined here.  Matrix Sum Complexity   Try the following exercises to test your understanding of computing matrix sums and differences.  Sum of Matrices   Sum\/Difference of Matrices 1   Sum\/Difference of Matrices 2   Sum\/Difference of Matrices 3   Sum\/Difference of Matrices 4    Scalar Multiplication  Again, similar to one-dimensional arrays, scalar multiplication with matrices is done element-wise. The algorithm below describes a method for computing a scalar multiple of an matrix.   def scalar_mult_matrix(myScalar, myMatrix):  rows = number of rows in myMatrix  cols = number of columns in myMatrix  scaled_matrix = a rows x cols array   for row in [0, 1, ..., rows - 1]:  for col in [0, 1, ..., cols - 1]:  scaled_matrix[row, col] = myScalar * myMatrix[row, col]   return scaled_matrix   Complete the exercise below to determine the run-time complexity of the scalar_mult_matrix() algorithm outlined above.  Scalar Multiplication Complexity   Try the following exercises to test your understanding of computing scalar multiples of matrices.  Scalar Multiplication 1   Scalar Multiplication 2   Scalar Multiplication 3   Scalar Multiplication 4    Matrix Multiplication  The operation of matrix multiplication is more complex that simply multiplying element-wise. Given two matrices and , we compute the entry of the matrix product by taking the inner product between the row of the matrix with the column of the matrix . This forces that the number of columns in matches the number of rows in . The resulting matrix then has a number of rows equal to the number of rows in and a number of columns equal to the number of columns in .  Below is an example showing how to compute the matrix product between a matrix and a matrix.  Matrix Product  Compute the matrix product , where and .      We can generalize this procedure into an algorithm below.   def matrix_product(A, B):  mA = number of rows in A  mB = number of rows in B  nA = number of columns in A  nB = number of columns in B   if nA not equal mB:  print(\"Matrix dimensions are not compatible for multiplication.\")  return NULL   matrix_product = an mA x nB array  for row in [0, 1, ..., mA - 1]:  for col in [0, 1, ..., nB - 1]:  myEntry = 0  for index in [0, 1, ..., nA - 1]:  myEntry = myEntry + (A[row, index] * B[index, col])  matrix_product[row, col] = myEntry   return matrix_product   As we've done with the other algorithms we've presented, complete the following exercise to determine the run-time complexity of the matrix multiplication algorithm outlined above.  Matrix Multiplication Complexity   Try the following exercises to test your understanding of computing matrix products.  Matrix Multiplication 1   Matrix Multiplication 2   Matrix Multiplication 3   Matrix Multiplication 4    Outer-products of one-dimensional arrays  At the end of the previous section, you were promised learning how to compute the outer-product between two one-dimensional arrays. We've blown by that, but will return to it now. With the addition of a simple initial step, computing the outer-product becomes a special case of the matrix multiplication you've just learned. Given two one-dimensional arrays, and , we'll tip on its side so that it becomes a row vector rather than a column vector . We'll call this taking the transpose of , and denote it by . The new array then has a single row. Since the array has a single column, then matrix multiplication is defined between these two objects. If is an array of length and is an array of length , then the outer product is a two-dimensional array with rows and columns. See the example below.  Compute the Outer-Product  Given the arrays and , compute the outer-product .      Compute the Outer Product    Conclusions  In this and the previous section you were exposed two one- and two-dimensional arrays. You've seen how simple mathematical operations, including scalar multiplication, addition\/subtraction, and products. We saw that there are at least two ways to define vector products, including the inner- and outer-products. Spoiler alert, there are more, and you'll encounter them elsewhere. We saw that multiplication is not a commutative operation with arrays. That is, is not generally the same as -- in fact, knowing that the product is defined doesn't even guarantee that the product is defined.  In the final section of this chapter, we'll simply introduce the notion that arrays with more than two dimensions exist and are quite useful. You've certainly encountered them whether you realize it or not. You'll likely encounter these structures in your more advanced coursework. See you in the next section.   "
},
{
  "id": "sec_arrays-ch-matrices-3-9",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-3-9",
  "type": "Checkpoint",
  "number": "7.2.1",
  "title": "List to Matrix Complexity.",
  "body": "List to Matrix Complexity  "
},
{
  "id": "sec_arrays-ch-matrices-4-5",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-5",
  "type": "Checkpoint",
  "number": "7.2.2",
  "title": "Matrix Sum Complexity.",
  "body": "Matrix Sum Complexity  "
},
{
  "id": "sec_arrays-ch-matrices-4-7",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-7",
  "type": "Checkpoint",
  "number": "7.2.3",
  "title": "Sum of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices.",
  "body": "Sum of Matrices  "
},
{
  "id": "sec_arrays-ch-matrices-4-8",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-8",
  "type": "Checkpoint",
  "number": "7.2.4",
  "title": "Sum\/Difference of <span class=\"process-math\">\\(m\\times n\\)<\/span> Matrices 1.",
  "body": "Sum\/Difference of Matrices 1  "
},
{
  "id": "sec_arrays-ch-matrices-4-9",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-9",
  "type": "Checkpoint",
  "number": "7.2.5",
  "title": "Sum\/Difference of <span class=\"process-math\">\\(m\\times n\\)<\/span> Matrices 2.",
  "body": "Sum\/Difference of Matrices 2  "
},
{
  "id": "sec_arrays-ch-matrices-4-10",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-10",
  "type": "Checkpoint",
  "number": "7.2.6",
  "title": "Sum\/Difference of <span class=\"process-math\">\\(m\\times n\\)<\/span> Matrices 3.",
  "body": "Sum\/Difference of Matrices 3  "
},
{
  "id": "sec_arrays-ch-matrices-4-11",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-4-11",
  "type": "Checkpoint",
  "number": "7.2.7",
  "title": "Sum\/Difference of <span class=\"process-math\">\\(m\\times n\\)<\/span> Matrices 4.",
  "body": "Sum\/Difference of Matrices 4  "
},
{
  "id": "sec_arrays-ch-matrices-5-5",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-5-5",
  "type": "Checkpoint",
  "number": "7.2.8",
  "title": "Scalar Multiplication Complexity.",
  "body": "Scalar Multiplication Complexity  "
},
{
  "id": "sec_arrays-ch-matrices-5-7",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-5-7",
  "type": "Checkpoint",
  "number": "7.2.9",
  "title": "Scalar Multiplication 1.",
  "body": "Scalar Multiplication 1  "
},
{
  "id": "sec_arrays-ch-matrices-5-8",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-5-8",
  "type": "Checkpoint",
  "number": "7.2.10",
  "title": "Scalar Multiplication 2.",
  "body": "Scalar Multiplication 2  "
},
{
  "id": "sec_arrays-ch-matrices-5-9",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-5-9",
  "type": "Checkpoint",
  "number": "7.2.11",
  "title": "Scalar Multiplication 3.",
  "body": "Scalar Multiplication 3  "
},
{
  "id": "sec_arrays-ch-matrices-5-10",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-5-10",
  "type": "Checkpoint",
  "number": "7.2.12",
  "title": "Scalar Multiplication 4.",
  "body": "Scalar Multiplication 4  "
},
{
  "id": "sec_arrays-ch-matrices-6-4",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-4",
  "type": "Example",
  "number": "7.2.13",
  "title": "Matrix Product.",
  "body": "Matrix Product  Compute the matrix product , where and .     "
},
{
  "id": "sec_arrays-ch-matrices-6-8",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-8",
  "type": "Checkpoint",
  "number": "7.2.14",
  "title": "Matrix Multiplication Complexity.",
  "body": "Matrix Multiplication Complexity  "
},
{
  "id": "sec_arrays-ch-matrices-6-10",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-10",
  "type": "Checkpoint",
  "number": "7.2.15",
  "title": "Matrix Multiplication 1.",
  "body": "Matrix Multiplication 1  "
},
{
  "id": "sec_arrays-ch-matrices-6-11",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-11",
  "type": "Checkpoint",
  "number": "7.2.16",
  "title": "Matrix Multiplication 2.",
  "body": "Matrix Multiplication 2  "
},
{
  "id": "sec_arrays-ch-matrices-6-12",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-12",
  "type": "Checkpoint",
  "number": "7.2.17",
  "title": "Matrix Multiplication 3.",
  "body": "Matrix Multiplication 3  "
},
{
  "id": "sec_arrays-ch-matrices-6-13",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-6-13",
  "type": "Checkpoint",
  "number": "7.2.18",
  "title": "Matrix Multiplication 4.",
  "body": "Matrix Multiplication 4  "
},
{
  "id": "sec_arrays-ch-matrices-7-3",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-7-3",
  "type": "Example",
  "number": "7.2.19",
  "title": "Compute the Outer-Product.",
  "body": "Compute the Outer-Product  Given the arrays and , compute the outer-product .     "
},
{
  "id": "sec_arrays-ch-matrices-7-4",
  "level": "2",
  "url": "sec_arrays-ch-matrices.html#sec_arrays-ch-matrices-7-4",
  "type": "Checkpoint",
  "number": "7.2.20",
  "title": "Compute the Outer Product.",
  "body": "Compute the Outer Product  "
},
{
  "id": "sec_arrays-ch-multidimensional-arrays",
  "level": "1",
  "url": "sec_arrays-ch-multidimensional-arrays.html",
  "type": "Section",
  "number": "7.3",
  "title": "Multidimensional Arrays",
  "body": " Multidimensional Arrays   In the first two sections of this chapter on arrays, we've encountered one-dimensional arrays (sometimes referred to as vectors), and two-dimensional arrays (often referred to as matrices). Arrays are important structures in mathematics and also in computing. We've spent our time focused on operations which can be done with arrays and some example implementations of algorithms that compute those operations. We've ignored the technical aspects of arrays from a computer science perspective since you'll get that exposure in computer science coursework.  Before we exit this chapter, its worth mentioning that multidimensional arrays (arrays with more than just rows and columns) exist and find lots of uses in the real world. For example, a three-dimensional array is requird to define the colors of the pixels on your computer monitor right now. You can think of such an array as containing a matrix for the red channel, another matrix for the green channel, and a third matrix for the blue channel. Perhaps there is a fourth matrix governing the opacity (equivalently, the level of transparency) of the pixel. This is often referred to as an alpha channel.  These multidimensional arrays find uses elsewhere too. Perhaps you've heard of machine learning, where some classes of model, like Long Short-Term Memory (LSTM) models, require these multidimensional arrays (sometimes called tensors ) as inputs. Arrays are important data structures, and you'll be making lots of use of them in your future coursework and computing endeavours.   "
},
{
  "id": "ch-graphs",
  "level": "1",
  "url": "ch-graphs.html",
  "type": "Chapter",
  "number": "8",
  "title": "Graph Theory",
  "body": "  Graph Theory     In progress. We don't intend for much to be included here, since the Project III chapter which follows asks the reader to research a topic in graph theory. This chapter will eventually include the following sections covering very basic background.  Introduction to Graph Theory  Special Classes of Graph  The example below shows how to embed tikz graphs into a PreTeXt document.   A Graph   Just a graph.             "
},
{
  "id": "ch-graphs-2-2",
  "level": "2",
  "url": "ch-graphs.html#ch-graphs-2-2",
  "type": "Figure",
  "number": "8.0.1",
  "title": "",
  "body": " A Graph   Just a graph.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
