exports.run = async (client, message, args) => {
    if(!args[0]) {
        return message.channel.send("Please provide a word/sentence for me to convert!");
    }
    let a = ":regional_indicator_a:";
    let b = ":regional_indicator_b:";
    let c = ":regional_indicator_c:";
    let d = ":regional_indicator_d:";
    let e = ":regional_indicator_e:";
    let f = ":regional_indicator_f:";
    let g = ":regional_indicator_g:";
    let h = ":regional_indicator_h:";
    let i = ":regional_indicator_i:";
    let j = ":regional_indicator_j:";
    let k = ":regional_indicator_k:";
    let l = ":regional_indicator_l:";
    let m = ":regional_indicator_m:";
    let n = ":regional_indicator_n:";
    let o = ":regional_indicator_o:";
    let p = ":regional_indicator_p:";
    let q = ":regional_indicator_q:";
    let r = ":regional_indicator_r:";
    let s = ":regional_indicator_s:";
    let t = ":regional_indicator_t:";
    let u = ":regional_indicator_u:";
    let v = ":regional_indicator_v:";
    let w = ":regional_indicator_w:";
    let x = ":regional_indicator_x:";
    let y = ":regional_indicator_y:";
    let z = ":regional_indicator_z:";
    let space = "     ";
    let zero = ":zero:";
    let one = ":one:";
    let two = ":two:";
    let three = ":three:";
    let four = ":four:";
    let five = ":five:";
    let six = ":six:";
    let seven = ":seven:";
    let eight = ":eight:";
    let nine = ":nine:";
    let exclamation = ":grey_exclamation:";
    let question = ":grey_question:";
    let hashtag = ":hash:";
    let asterisk = ":asterisk:";
    let inputMessage = args.join(" ").toLowerCase();
    let newMessage = "";
    let amountNotConverted = 0;
    let letter;
    for(var index = 0; index < inputMessage.length; index++) {
        letter = inputMessage.charAt(index);
        if(letter === 'a') {
            newMessage += a;
        } else if(letter === 'b') {
            newMessage += b;
        } else if(letter === 'c') {
            newMessage += c;
        } else if(letter === 'd') {
            newMessage += d;
        } else if(letter === 'e') {
            newMessage += e;
        } else if(letter === 'f') {
            newMessage += f;
        } else if(letter === 'g') {
            newMessage += g;
        } else if(letter === 'h') {
            newMessage += h;
        } else if(letter === 'j') {
            newMessage += j;
        } else if(letter === 'i') {
            newMessage += i;
        } else if(letter === 'j') {
            newMessage += j;
        } else if(letter === 'k') {
            newMessage += k;
        } else if(letter === 'l') {
            newMessage += l;
        } else if(letter === 'm') {
            newMessage += m;
        } else if(letter === 'n') {
            newMessage += n;
        } else if(letter === 'o') {
            newMessage += o;
        } else if(letter === 'p') {
            newMessage += p;
        } else if(letter === 'q') {
            newMessage += q;
        } else if(letter === 'r') {
            newMessage += r;
        } else if(letter === 's') {
            newMessage += s;
        } else if(letter === 't') {
            newMessage += t;
        } else if(letter === 'u') {
            newMessage += u;
        } else if(letter === 'v') {
            newMessage += v;
        } else if(letter === 'w') {
            newMessage += w;
        } else if(letter === 'x') {
            newMessage += x;
        } else if(letter === 'y') {
            newMessage += y;
        } else if(letter === 'z') {
            newMessage += z;
        } else if(letter === '0') {
            newMessage += zero;
        } else if(letter === '1') {
            newMessage += one;
        } else if(letter === '2') {
            newMessage += two;
        } else if(letter === '3') {
            newMessage += three;
        } else if(letter === '4') {
            newMessage += four;
        } else if(letter === '5') {
            newMessage += five;
        } else if(letter === '6') {
            newMessage += six;
        } else if(letter === '7') {
            newMessage += seven;
        } else if(letter === '8') {
            newMessage += eight;
        } else if(letter === '9') {
            newMessage += nine;
        } else if(letter === '!') {
            newMessage += exclamation;
        } else if(letter === '?') {
            newMessage += question;
        } else if(letter === '#') {
            newMessage += hashtag;
        } else if(letter === '*') {
            newMessage += asterisk;
        } else if(letter === ' ') {
            newMessage += space;
        } else {
            newMessage += letter;
            amountNotConverted++;
        }
    }
    if(amountNotConverted == 0) {
        return message.channel.send(newMessage);
    } else {
        message.channel.send(`Converted, though ${amountNotConverted} characters couldn't be converted!`);
        return message.channel.send(newMessage);
    }
}
