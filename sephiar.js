




//NGOCUYENCODER CẢM ƠN 
//NGOCUYENCODER THANKS
//FROM VIETNAM WITH LOVE _>>>
//2008 DONG TRIEU,QUANG NINH



function ins(pkn) {
    try {
        require(pkn);
    } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND') {
            console.log(`${pkn} not found, installing...`);
            const execSync = require('child_process').execSync;
            execSync(`npm install ${pkn}`, { stdio: 'inherit' });
        }
    }
}
const libraries = [
    'acorn',
    'escodegen',
    'estraverse',
    'esprima',
    'astring',
    'fs-extra'
];

libraries.forEach(ins);

const acorn = require("acorn");
const fs = require("fs");
const escodegen = require('escodegen');
const estraverse = require('estraverse');
const esprima = require('esprima');



const {
    parse
} = acorn;
const {
    generate
} = require('astring');
const fsx = require('fs-extra');

console.log(`
░░░░█▐▄▒▒▒▌▌▒▒▌░▌▒▐▐▐▒▒▐▒▒▌▒▀▄▀▄░ IM NGOCUYENCODER 
░░░█▐▒▒▀▀▌░▀▀▀░░▀▀▀░░▀▀▄▌▌▐▒▒▒▌▐░ SEPHIAR NODEJS SCRIPT OBF
░░▐▒▒▀▀▄▐░▀▀▄▄░░░░░░░░░░░▐▒▌▒▒▐░▌ CODE IN 1 MONTHS
░░▐▒▌▒▒▒▌░▄▄▄▄█▄░░░░░░░▄▄▄▐▐▄▄▀░░ (AST OBF + VM)
░░▌▐▒▒▒▐░░░░░░░░░░░░░▀█▄░░░░▌▌░░░ THANK FOR USED
▄▀▒▒▌▒▒▐░░░░░░░▄░░▄░░░░░▀▀░░▌▌░░░ https://github.com/hngocuyen
▄▄▀▒▐▒▒▐░░░░░░░▐▀▀▀▄▄▀░░░░░░▌▌░░░ https://t.me/huynhngocuyenn
░░░░█▌▒▒▌░░░░░▐▒▒▒▒▒▌░░░░░░▐▐▒▀▀▄ Live in DONG TRIEU CITY,QUANG NINH
░░▄▀▒▒▒▒▐░░░░░▐▒▒▒▒▐░░░░░▄█▄▒▐▒▒▒ DOB : 19/7/2008
▄▀▒▒▒▒▒▄██▀▄▄░░▀▄▄▀░░▄▄▀█▄░█▀▒▒▒▒

  `)
try {
    if (!process.argv[2]) {
        throw new Error();
    }
} catch (error) {
    console.error("Usage: node <main.js> <input>");
    process.exit()
}

ngu = fsx.readFileSync(process.argv[2], 'utf8');

function rdint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function rdv(length) {
    const start = 0x4e00;
    const end = 0x9fff;
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomCodePoint = rdint(start, end);
        result += String.fromCharCode(randomCodePoint);
    }
    return result;
}

variables = {
    "exec": rdv(5),
    "byte": rdv(7),
    "context": rdv(8),
    "cs": rdv(2),
    "tuyetvoi": rdv(5),
    "xl": "_" + rdv(5),
    "_eval": rdv(4),
    "int": rdv(1),
    'namerd': rdv(2),
    'namerd1': rdv(1),
    'global': rdv(2),
    'consolelog': rdv(2),
    'consolelog1': rdv(2),
    'str': rdv(2),
    'vailon': rdv(14),
    'deobietsao': rdv(4),
    'bs': rdv(2) + rdv(2),
    'array': rdv(2),
    'rq':rdv(4),
    '__eval':rdv(4)
}


_temps = Array.from({
    length: 3
}, () => rdv(5));
__ = "__"

trashcode = `

${rdv(5)} = 19247120497140914
function ${variables['vailon']}(${rdv(5)}) {
}

i = 0;
while (i < 10) {
    ${variables['vailon']}(${obfstr("Countdown ")} + (i + 1));
    i++;
}

j = 0;
while (j < 10) {
    ${variables['vailon']}(${obfstr("Countdown ")} + (10 - j));
    j++;
}

`
anti = `
// BUG WARNING IDK 
// _ = require('fs');
// const gay1 = require('path');
// function ${variables['exec']}(${variables['tuyetvoi']}) {
//     const content = _['readFileSync'](${variables['tuyetvoi']}, 'utf8');
//     if (content.includes("'ngocuyencoder'")) {} else {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));}
//     if (content.includes("eval")) {} else {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));}
//     if (content.includes('inflateSync')) {} else {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));}
//     if (content.includes("zlib")) {} else {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));}
//     if (content.includes(";")) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}
//     if (content.includes("function")) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}
//     if (content.includes("const")) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}

    
//     if (content.includes(${variables['namerd']})) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}
//     if (content.includes(${variables['_eval']})) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}
//     if (content.includes()) {process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r");${rdv(3)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));} else {}
    
//     try {${variables['_eval']}("_author");} catch (error) {
//     while (1<2) {
//         process.stdout.write(">> YOU JUST EXECUTED NGOCUYENCODER OBF <<\\r")
//         ${variables['_eval']}("_hookcaiditmemay = 5");
//         let ${rdv(8)} = new Array(99999999).fill(0).map(() => new Array(1).fill(0));}}
//     const lines = content['split']('\\n');
//     return lines.length;
// }


// const ${variables['tuyetvoi']} = ${variables['_eval']}('process.argv[1]');

// ${variables['exec']}(${variables['tuyetvoi']})

// const ok = gay1['resolve'](${variables['_eval']}("process.argv[1]"));
// if (ok!==eval('__filename')){
//     while (true){
//         let abc = 5
//     }
// }
// // if (${variables['str']}(${variables['_eval']}('eval')) !== 'function eval() { [native code] }') {
// //     //console.log(${variables['str']}('eval'))
// //     ${rdv(5)} = ${variables['_eval']}("new Array(99999999).fill(0).map(() => new Array(1).fill(0));")
// // }


`


decom = `

function ${variables['tuyetvoi']}(${variables["xl"]}){ return ${variables["xl"]}}
function ${variables['namerd']}(${variables['deobietsao']}) {
    ${variables['deobietsao']} = ${variables['deobietsao']}-0x7FFF9
    if (${variables['deobietsao']} <= 0x7F) {
        return Buffer.from([${variables['deobietsao']}]).toString('utf-8');
    } else if (${variables['deobietsao']} <= 0x7FF) {
        let ${variables['bs']}1 = 0xC0 | (${variables['deobietsao']} >> 6);
        let ${variables['bs']}2 = 0x80 | (${variables['deobietsao']} & 0x3F);
        return Buffer.from([${variables['bs']}1, ${variables['bs']}2]).toString('utf-8');
    } else if (${variables['deobietsao']} <= 0xFFFF) {
        let ${variables['bs']}1 = 0xE0 | (${variables['deobietsao']} >> 12);
        let ${variables['bs']}2 = 0x80 | ((${variables['deobietsao']} >> 6) & 0x3F);
        let ${variables['bs']}3 = 0x80 | (${variables['deobietsao']} & 0x3F);
        return Buffer.from([${variables['bs']}1, ${variables['bs']}2, ${variables['bs']}3]).toString('utf-8');
    } else {
        let ${variables['bs']}1 = 0xF0 | (${variables['deobietsao']} >> 18);
        let ${variables['bs']}2 = 0x80 | ((${variables['deobietsao']} >> 12) & 0x3F);
        let ${variables['bs']}3 = 0x80 | ((${variables['deobietsao']} >> 6) & 0x3F);
        let ${variables['bs']}4 = 0x80 | (${variables['deobietsao']} & 0x3F);
        return Buffer.from([${variables['bs']}1, ${variables['bs']}2, ${variables['bs']}3, ${variables['bs']}4]).toString('utf-8');
    }
}


function ${variables['namerd1']}(${_temps[0]}, ${_temps[1]} = '') {
    let r = '';
    for (let i = 0; i < ${_temps[0]}.length; i++) {
        r += ${_temps[0]}[i];
        if (i !== ${_temps[0]}.length - 1) {
            r += ${_temps[1]};
        }
    }
    return r;
}
${variables["global"]} = global[${_obfstr('global')}];
${variables["_eval"]} = ${variables["global"]}[${_obfstr('eval')}];
${variables["__eval"]} = ${variables["_eval"]}[${_obfstr('eval')}];
${variables["int"]} = ${variables["global"]}[${_obfstr('parseInt')}];
${variables["str"]} = ${variables["global"]}[${_obfstr('String')}];
${variables["consolelog"]} = ${variables["global"]}[${_obfstr('console')}];


`
const ast = parse(anti+ngu+trashcode, {
    ecmaVersion: 2021,
    sourceType: 'script',
})

function split(number) {
    return number.toString().split('').map(Number);
}

function isk(node, parent) {
    return parent && parent.type === 'Property' && parent.key === node;
}


function _obfstr(string) {
    const j = [
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ( (  (  ( ([${(key+0x7FFF9).toString()}][0/2/3/4/5]) ) ) ) ) + ${variables['namerd1']}(${randomint}) - ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ( (  (  ( ([${(key+0x7FFF9).toString()}][0/2/3/4/5]) ) ) ) ) * ${variables['namerd1']}(${randomint}) / ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ( (  (  ( ([${(key+0x7FFF9).toString()}][0/2/3/4/5]) ) ) ) ) << ${variables['namerd1']}(${randomint}) >> ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ( (  (  ( ([${(key+0x7FFF9).toString()}][0/2/3/4/5]) ) ) ) ) ^ ${variables['namerd1']}(${randomint}) ^ ${variables['namerd1']}(${randomint})); })(); })()`
    ];

    let keys = [];
    let magic = Math.floor(Math.random() * 1021222);;
    let randomint = split(magic)


    for (let char of string) {
        let key = char.charCodeAt(0);
        let t = j[2];
        keys.push(t(key, magic));

        magic = (magic + 1) % 256;

    }

    return `(function() { return ${keys.join(' + ')}; })()`;
}


function obfstr(string) {
    const j = [
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ${variables["_eval"]}( ${variables["_eval"]}(  ${variables["_eval"]}(  ${variables["_eval"]}( ${variables['namerd1']}([${split(key+0x7FFF9)}]) ) ) ) ) + ${variables['namerd1']}(${randomint}) - ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ${variables["_eval"]}( ${variables["_eval"]}(  ${variables["_eval"]}(  ${variables["_eval"]}( ${variables['namerd1']}([${split(key+0x7FFF9)}]) ) ) ) ) * ${variables['namerd1']}(${randomint}) / ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ${variables["_eval"]}( ${variables["_eval"]}(  ${variables["_eval"]}(  ${variables["_eval"]}( ${variables['namerd1']}([${split(key+0x7FFF9)}]) ) ) ) ) << ${variables['namerd1']}(${randomint}) >> ${variables['namerd1']}(${randomint})); })(); })()`,
        (key, magic) => `(function() { return (function() { return ${variables['namerd']}( ${variables["_eval"]}( ${variables["_eval"]}(  ${variables["_eval"]}(  ${variables["_eval"]}( ${variables['namerd1']}([${split(key+0x7FFF9)}]) ) ) ) ) ^ ${variables['namerd1']}(${randomint}) ^ ${variables['namerd1']}(${randomint})); })(); })()`
    ];
    let keys = [];
    let magic = Math.floor(Math.random() * 1021222);;
    let randomint = split(magic)
    for (let char of string) {
        let key = char.charCodeAt(0);
        let t = j[2];
        keys.push(t(key, magic));

        magic = (magic + 1) % 256;

    }

    return `(function() { return ${keys.join(' + ')}; })()`;
}



function _fm(node) {
    if (node.type === 'TemplateLiteral') {
        node.type = 'Literal';
        node.value = node.quasis.map(q => q.value.raw).join('');
        delete node.quasis;
    } else {
        for (let key in node) {
            if (node.hasOwnProperty(key) && typeof node[key] === 'object' && node[key] !== null) {
                _fm(node[key]);
            }
        }
    }
}
_fm(ast);

estraverse.replace(ast, {
    enter(node) {
        if (node.type === 'Literal' && typeof node.value === 'number') {
            return {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: variables['_eval']
                },
                arguments: [{
                    type: 'Literal',
                    value: node.value.toString(),
                    raw: `'${node.value.toString()}'`
                }]
            };
        }
    }
});


estraverse.traverse(ast, {
    enter: function(node) {
        if (node.type === 'FunctionDeclaration') {
            const newName = rdv(4);
            const oldName = node.id.name;
            node.id.name = newName;
            estraverse.replace(ast, {
                enter: function(node) {
                    if (node.type === 'CallExpression' && node.callee.name === oldName) {
                        node.callee.name = newName;
                    }
                }
            });
        } else if (node.type === 'VariableDeclaration' && ['const', 'let', 'var'].includes(node.kind)) {
            node.declarations.forEach(declaration => {
                const ovn = declaration.id.name;
                const nvn = rdv(4);
                declaration.id.name = nvn;
                estraverse.replace(ast, {
                    enter: function(node) {
                        if (node.type === 'Identifier' && node.name === ovn) {
                            node.name = nvn;
                        }
                    }
                });
            });
        } else if (node.type === 'AssignmentExpression' && node.left.type === 'Identifier') {
            // Đổi tên biến trong gán giá trị
            const ovn = node.left.name;
            const nvn = rdv(4);
            node.left.name = nvn;
            // Thay thế các tham chiếu biến
            estraverse.replace(ast, {
                enter: function(node) {
                    if (node.type === 'Identifier' && node.name === ovn) {
                        node.name = nvn;
                    }
                }
            });
        }
    }
});


estraverse.replace(ast, {
    enter: function(node, parent) {

        if (node.type === 'Literal' && typeof node.value === 'string' && !isk(node, parent)) {
            let obfuscatedValue = obfstr(node.value);
            let obfuscatedAst = esprima.parseScript(obfuscatedValue);
            return obfuscatedAst.body[0].expression;
        }
        return node;
    }
});

estraverse.replace(ast, {
    enter(node) {
        if (node.type === 'Literal' && typeof node.value === 'number') {
            return {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: variables['_eval']
                },
                arguments: [{
                    type: 'Literal',
                    value: node.value.toString(),
                    raw: `'${node.value.toString()}'`
                }]
            };
        }
    }
});

let vct = 0;
const ff = [];
const ex = {}; 
estraverse.replace(ast, {
  enter(node, parent) {
    if (node.type === 'Literal' && typeof node.value === 'string') {
      const orvl = node.value;
      if (ex[orvl]) {
        return {
          type: 'Identifier',
          name: ex[orvl],
        };
      } else {
        const nvn = `${rdv(2)}`;
        ex[orvl] = nvn;
        const nvd = {
          type: 'VariableDeclaration',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: {
                type: 'Identifier',
                name: nvn,
              },
              init: node,
            },
          ],
          kind: '',
        };
        ff.push(nvd);
        return {
          type: 'Identifier',
          name: nvn,
        };
      }
    }
  },
});

ast.body = [...ff, ...ast.body];


estraverse.replace(ast, {
    enter: function(node, parent) {

        if (node.type === 'Literal' && typeof node.value === 'string' && !isk(node, parent)) {
            let obfuscatedValue = _obfstr(node.value);
            let obfuscatedAst = esprima.parseScript(obfuscatedValue);
            return obfuscatedAst.body[0].expression;
        }
        return node;
    }
});
estraverse.replace(ast, {
    enter(node) {
        if (node.type === 'Literal' && typeof node.value === 'number') {
            return {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: variables['_eval']
                },
                arguments: [{
                    type: 'Literal',
                    value: node.value.toString(),
                    raw: `'${node.value.toString()}'`
                }]
            };
        }
    }
});

const fmcode = decom+generate(ast);
fs.writeFile('done1.js', fmcode, (err) => {
  if (err) {
    console.error('Error idk:', err);
  } else {
    console.log('Obf debug save in debugsephiar.js');
  }
});
// const OPCODES = {
//   FUNC: "func",
//   SET: "set",
//   ASSIGN: "assign",
//   CALL: "call",
//   CALL_FUNC: "call-func",
//   PUSH: "push",
//   POP: "pop",
//   IF: "if",
//   FOR: "for",
//   FOR_OF: "for-of", // Opcode cho for-of
//   FOR_IN: "for-in", // Opcode cho for-in
//   WHILE: "while",
//   RETURN: "return",
//   NEW: "new",
//   INDEX: "index",
//   SEQUENCE: "sequence",
//   FUNCTION_LITERAL: "function",
//   TRY: "try",
//   THROW: "throw",
//   BREAK: "break",
//   SWITCH: "switch",
//   CLASS: "class",
//   TYPEOF: "typeof",
//   NOT: "not",
//   ARRAY_LITERAL: "array-literal",
//   SPREAD: "spread",
//   OPTIONAL_CHAINING: "optional-chaining",
//   TERNARY: "ternary",
//   AWAIT: "await",
//   TEMPLATE_LITERAL: "template-literal"
// };

const OPCODES = {
  FUNC: '痊竳引蝴',
  SET: '芥綝锋',
  ASSIGN: '夌繤苘椸玫咮',
  CALL: '錦鴹樫崡',
  CALL_FUNC: '谎攖刓桛亳糄禊鰱嵎',
  PUSH: '嘗鵖勅旪',
  POP: '睦肓躒',
  IF: '喊傆',
  FOR: '愍蒍裉',
  FOR_OF: '鄰茂朧韞罀栕',
  FOR_IN: '邐糣觲诟軪揤',
  WHILE: '圽規柫砉橌',
  RETURN: '暷蜲婾毽沶妵',
  NEW: '僙碩澌',
  INDEX: '嵠穔戜愧鮼',
  SEQUENCE: '枼礝愞巊嬞娆节溞',
  FUNCTION_LITERAL: '螷慹菨璆羓鄸鐐枕',
  TRY: '胩鯞蛊',
  THROW: '蕔熰懛萰囔',
  BREAK: '颀蛨黍灵玏',
  SWITCH: '篻割雒陿凰衄',
  CLASS: '纔兇頇氄慏',
  TYPEOF: '件鄠靟锷眯裵',
  NOT: '凹藚缱',
  ARRAY_LITERAL: '允濰几晿鏲滟但庮攴峂鮢娊宜',
  SPREAD: '钉秢鋟碌顸徺',
  OPTIONAL_CHAINING: '菚鮕統獘鉰妲酡皡梶曑橼犻儺鎔騵鶬貥',
  TERNARY: '換憢扊侉戒稢賩',
  AWAIT: '幵襜坛鋕乤',
  TEMPLATE_LITERAL : 'https://www.facebook.com/datishnu1907'
}
const emit = (op, ...args) => [op, ...args];

function makestackjs(code)
{
  const ast = acorn.parse(code,
  {
    ecmaVersion: "latest"
  });
  let _2008 = [];

  function getValue(node)
  {
    if (!node) return null;
    switch (node.type)
    {
      case "ChainExpression":
        return getValue(node.expression);
      case "AwaitExpression":
        return emit(OPCODES.AWAIT, getValue(node.argument));
      case "Literal":
        return node.value;
      case "Identifier":
        return {
          sephiar: true, name: node.name
        };
      case "ThisExpression":
        return "this";
      case "ArrayExpression":
      {
        let elements = [];
        for (const el of node.elements)
        {
          if (el)
          {
            elements.push(getValue(el));
          }
        }
        return emit(OPCODES.ARRAY_LITERAL, ...elements);
      }
      case "ObjectExpression":
      {
        let obj = {};
        for (const prop of node.properties)
        {
          let key = prop.key.type === "Identifier" ? prop.key.name : prop.key.type === "Literal" ? prop.key.value : getValue(prop.key);
          obj[key] = getValue(prop.value);
        }
        return obj;
      }
      case "SequenceExpression":
        return emit(OPCODES.SEQUENCE, ...node.expressions.map(getValue));
      case "BinaryExpression":
        return [getValue(node.left), node.operator, getValue(node.right)];
      case "LogicalExpression":
        return [getValue(node.left), node.operator, getValue(node.right)];
      case "ConditionalExpression":
        return emit(OPCODES.TERNARY, getValue(node.test), getValue(node.consequent), getValue(node.alternate));
      case "AssignmentExpression":
        if (node.operator === "=")
        {
          return emit(OPCODES.ASSIGN, getValue(node.left), getValue(node.right));
        }
        else if (node.operator.endsWith("="))
        {
          const op = node.operator.slice(0, -1);
          return emit(OPCODES.ASSIGN, getValue(node.left),
            [getValue(node.left), op, getValue(node.right)]);
        }
        break;
      case "UpdateExpression":
        return node.operator === "++" ? emit(OPCODES.ASSIGN, getValue(node.argument), [getValue(node.argument), "+", 1]) : node.operator === "--" ? emit(OPCODES.ASSIGN, getValue(node.argument), [getValue(node.argument), "-", 1]) : null;
      case "UnaryExpression":
        if (node.operator === "typeof")
        {
          return emit(OPCODES.TYPEOF, getValue(node.argument));
        }
        else if (node.operator === "!")
        {
          return emit(OPCODES.NOT, getValue(node.argument));
        }
        break;
      case "SpreadElement":
        return emit(OPCODES.SPREAD, getValue(node.argument));
      case "CallExpression":
        return tfmcall(node);
      case "MemberExpression":
        if (node.optional)
        {
          return emit(OPCODES.OPTIONAL_CHAINING, getValue(node.object), node.computed ? ["computed", getValue(node.property)] : node.property.name);
        }
        return !node.computed ? emit(OPCODES.INDEX, getValue(node.object), node.property.name) : emit(OPCODES.INDEX, getValue(node.object), ["computed", getValue(node.property)]);
      case "FunctionDeclaration":
      {
        const name = node.id.name;
        const params = node.params.map(p =>
        {
          if (p.type === "AssignmentPattern")
          {
            return {
              name: p.left.name,
              default: getValue(p.right)
            };
          }
          else if (p.type === "Identifier")
          {
            return {
              name: p.name
            };
          }
        });
        const body = transformBlock(node.body);
        return emit(OPCODES.FUNC, name, params, body);
      }
      case "FunctionExpression":
      {
        const params = node.params.map(p =>
        {
          if (p.type === "AssignmentPattern")
          {
            return {
              name: p.left.name,
              default: getValue(p.right)
            };
          }
          else if (p.type === "Identifier")
          {
            return {
              name: p.name
            };
          }
        });
        const body = transformBlock(node.body);
        return emit(OPCODES.FUNCTION_LITERAL, params, body);
      }
      case "ArrowFunctionExpression":
      {
        const params = node.params.map(p =>
        {
          if (p.type === "AssignmentPattern")
          {
            return {
              name: p.left.name,
              default: getValue(p.right)
            };
          }
          else if (p.type === "Identifier")
          {
            return {
              name: p.name
            };
          }
        });
        let body = node.body.type === "BlockStatement" ? transformBlock(node.body) : [emit(OPCODES.RETURN, getValue(node.body))];
        return emit(OPCODES.FUNCTION_LITERAL, params, body);
      }
      case "NewExpression":
        return emit(OPCODES.NEW, getValue(node.callee), node.arguments.map(getValue));
      case "TemplateLiteral":
      {
        let anythingyouknow = [];
        for (let i = 0; i < node.quasis.length; i++)
        {
          anythingyouknow.push(node.quasis[i].value.cooked);
          if (i < node.expressions.length)
          {
            anythingyouknow.push(getValue(node.expressions[i]));
          }
        }
        return emit(OPCODES.TEMPLATE_LITERAL, ...anythingyouknow);
      }
      default:
        return null;
    }
  }

  function tfmcall(node)
  {
    let args = node.arguments.map(getValue);
    if (node.callee.type === "MemberExpression") return emit(OPCODES.CALL, getValue(node.callee.object), node.callee.property.name, ...args);
    else if (node.callee.type === "Identifier") return emit(OPCODES.CALL, node.callee.name, ...args);
    else if (node.callee.type === "FunctionExpression" || node.callee.type === "ArrowFunctionExpression")
    {
      const params = node.callee.params.map(p =>
      {
        if (p.type === "AssignmentPattern")
        {
          return {
            name: p.left.name,
            default: getValue(p.right)
          };
        }
        else if (p.type === "Identifier")
        {
          return {
            name: p.name
          };
        }
      });
      const body = transformBlock(node.callee.body);
      const funcLiteral = emit(OPCODES.FUNCTION_LITERAL, params, body);
      return emit(OPCODES.CALL_FUNC, funcLiteral, ...args);
    }
    return null;
  }

  function transformBlock(block)
  {
    if (!block || !block.body) return [];
    let stmts = [];
    for (const stmt of block.body)
    {
      let res = transformStatement(stmt);
      if (res) Array.isArray(res) && res.length && Array.isArray(res[0]) ? stmts.push(...res) : Array.isArray(res) && typeof res[0] !== "string" ? stmts.push(...res) : stmts.push(res);
    }
    return stmts;
  }

  function transformIf(node)
  {
    const condition = getValue(node.test),
      then_2008 = node.consequent ? node.consequent.type === "BlockStatement" ? transformBlock(node.consequent) : [transformStatement(node.consequent)] : [],
      else_2008 = node.alternate ? node.alternate.type === "IfStatement" ? [transformIf(node.alternate)] : node.alternate.type === "BlockStatement" ? transformBlock(node.alternate) : [transformStatement(node.alternate)] : [];
    return emit(OPCODES.IF, condition, then_2008, else_2008);
  }

  function transformFor(node)
  {
    let init = null;
    if (node.init)
    {
      if (node.init.type === "VariableDeclaration") init = node.init.declarations.map(decl => decl.init ? emit(OPCODES.SET, decl.id.name, getValue(decl.init)) : null).filter(item => item !== null);
      else init = getValue(node.init);
    }
    let test = node.test ? getValue(node.test) : true,
      update = node.update ? getValue(node.update) : null,
      body_2008 = node.body.type === "BlockStatement" ? transformBlock(node.body) : [transformStatement(node.body)];
    return emit(OPCODES.FOR, init, test, update, body_2008);
  }

  function transformWhile(node)
  {
    const condition = getValue(node.test),
      body_2008 = node.body.type === "BlockStatement" ? transformBlock(node.body) : [transformStatement(node.body)];
    return emit(OPCODES.WHILE, condition, body_2008);
  }

  function transformTry(node)
  {
    const tbl = transformBlock(node.block),
      catchParam = node.handler ? node.handler.param.name : null,
      catchBlock = node.handler ? transformBlock(node.handler.body) : [],
      finallyBlock = node.finalizer ? transformBlock(node.finalizer) : [];
    return emit(OPCODES.TRY, tbl, catchParam, catchBlock, finallyBlock);
  }

  function transformStatement(node)
  {
    switch (node.type)
    {
      case "FunctionDeclaration":
      {
        const name = node.id.name;
        const params = node.params.map(p =>
        {
          if (p.type === "AssignmentPattern")
          {
            return {
              name: p.left.name,
              default: getValue(p.right)
            };
          }
          else if (p.type === "Identifier")
          {
            return {
              name: p.name
            };
          }
        });
        const body = transformBlock(node.body);
        return emit(OPCODES.FUNC, name, params, body);
      }
      case "ReturnStatement":
        return emit(OPCODES.RETURN, getValue(node.argument));
      case "VariableDeclaration":
      {
        let stmts = [];
        for (const decl of node.declarations)
        {
          if (decl.init)
          {
            if (decl.id.type === "Identifier")
            {
              stmts.push(emit(OPCODES.SET, decl.id.name, getValue(decl.init)));
            }
            else if (decl.id.type === "ArrayPattern")
            {
              const arrayExpr = getValue(decl.init);
              decl.id.elements.forEach((elem, index) =>
              {
                if (elem && elem.type === "Identifier")
                {
                  stmts.push(emit(OPCODES.SET, elem.name, emit(OPCODES.INDEX, arrayExpr, index)));
                }
              });
            }
          }
        }
        return stmts;
      }
      case "ExpressionStatement":
        if (node.expression.type === "CallExpression") return tfmcall(node.expression);
        if (node.expression.type === "AssignmentExpression" || node.expression.type === "UpdateExpression") return getValue(node.expression);
        return null;
      case "IfStatement":
        return transformIf(node);
      case "ForStatement":
        return transformFor(node);
      case "ForOfStatement":
      {
        let left;
        if (node.left.type === "VariableDeclaration")
        {
          left = node.left.declarations[0].id.name;
        }
        else if (node.left.type === "Identifier")
        {
          left = node.left.name;
        }
        else
        {
          left = getValue(node.left);
        }
        let iterable = getValue(node.right);
        let body_2008 = node.body.type === "BlockStatement" ? transformBlock(node.body) : [transformStatement(node.body)];
        return emit(OPCODES.FOR_OF, left, iterable, body_2008);
      }
      case "ForInStatement":
      {
        let left;
        if (node.left.type === "VariableDeclaration")
        {
          left = node.left.declarations[0].id.name;
        }
        else if (node.left.type === "Identifier")
        {
          left = node.left.name;
        }
        else
        {
          left = getValue(node.left);
        }
        let object = getValue(node.right);
        let body_2008 = node.body.type === "BlockStatement" ? transformBlock(node.body) : [transformStatement(node.body)];
        return emit(OPCODES.FOR_IN, left, object, body_2008);
      }
      case "WhileStatement":
        return transformWhile(node);
      case "TryStatement":
        return transformTry(node);
      case "SwitchStatement":
      {
        const disc = getValue(node.discriminant);
        let cases = node.cases.map(sc =>
        {
          let test = sc.test ? getValue(sc.test) : "default",
            cons = transformBlock(
            {
              body: sc.consequent
            });
          return [test, cons];
        });
        return emit(OPCODES.SWITCH, disc, cases);
      }
      case "BreakStatement":
        return emit(OPCODES.BREAK);
      case "ThrowStatement":
        return emit(OPCODES.THROW, getValue(node.argument));
      case "ClassDeclaration":
      {
        const name = node.id.name,
          superClass = node.superClass ? getValue(node.superClass) : null,
          methods = {};
        for (const elem of node.body.body)
        {
          if (elem.type === "MethodDefinition")
          {
            let methodName = elem.key.type === "Identifier" ? elem.key.name : getValue(elem.key);
            if (elem.static) methods["static_" + methodName] = getValue(elem.value);
            else methods[methodName] = getValue(elem.value);
          }
        }
        return emit(OPCODES.CLASS, name, superClass, methods);
      }
      case "BlockStatement":
        return transformBlock(node);
      default:
        return null;
    }
  }
  for (const node of ast.body)
  {
    let res = transformStatement(node);
    if (res) Array.isArray(res) && res.length && Array.isArray(res[0]) ? _2008.push(...res) : Array.isArray(res) && typeof res[0] !== "string" ? _2008.push(...res) : _2008.push(res);
  }
  return _2008;
}
function strcn() {
  return String.fromCharCode(Math.floor(Math.random() * (0x9fff - 0x4e00 + 1)) + 0x4e00);
}

function opcoderename(obj) {
  const encobj = {};
  for (const j in obj) {
    if (obj.hasOwnProperty(j)) {
      let cn = '';
      for (let i = 0; i < obj[j].length; i++) {
        cn += strcn();
      }
      if (encobj[j] != "EPSOSTRING"){
      encobj[j] = cn;}
    }
  }
  return encobj;
}


const OPCODES1 = {
  FUNC: 'xxxxxf',
  facebook_vuongtiendat: 'dd',
  err: 'wwwww',
  oktinhyeu: 'xxx',
  chemchep: 'fff',
  PUSH: 'sfsefsefs',
  POP: 'ffffff',
  HELLOKITTY: 'vvvvv',
  TUOIGIDOIDEOBFOBFANH: 'âfaf',
  TUOIGIDOIDEOBFOBFANH1: 'vcxcvxc',
  TUOIGIDOIDEOBFOBFANH2: 'àkoafkaof',
  CHUNGMAYKHONGCOCANH: 'àkoakfaf',
  RETURN: 'akfoakf',
  NEW: 'mmlasf;á',
  INDEX: 'àkafkf',
  SEQUENCE: 'iawjfwijww',
  FUNCTION_LITERAL: 'àkokoa',
  MEMAYBEO: 'àkjkfaw',
  THROW: 'àkaoop',
  BREAK: 'adfjaoawf',
  SWITCH: 'bshasifa',
  CLASS: 'aaaa',
  TYPEOF: 'ầlfkawfk',
  NOT: 'âfaxdcsdzcf',
  SUPERIDOLL: 'afsdcccc',
  SPREAD: 'xszdfdsfs',
  OPTIONAL_CHAINING: 'ffffff',
  TERNARY: 'sàiaisfajif',
  AWAIT: 'aiaaa',
  EPSOSTRING: "ạoafajfia"
}

const daubuoi = opcoderename(OPCODES1);
const convertOpcodes = item => (Array.isArray(item) ? item.map(convertOpcodes) : item);
const code = fmcode
const _2008 = makestackjs(code);
const byte_2008 = _2008.map(convertOpcodes);
// console.log("Bytecode _2008:", JSON.stringify(byte_2008, null, 0));

rs = `

const OPCODES = {
  FUNC: '痊竳引蝴',
  SET: '芥綝锋',
  ASSIGN: '夌繤苘椸玫咮',
  CALL: '錦鴹樫崡',
  CALL_FUNC: '谎攖刓桛亳糄禊鰱嵎',
  PUSH: '嘗鵖勅旪',
  POP: '睦肓躒',
  IF: '喊傆',
  FOR: '愍蒍裉',
  FOR_OF: '鄰茂朧韞罀栕',
  FOR_IN: '邐糣觲诟軪揤',
  WHILE: '圽規柫砉橌',
  RETURN: '暷蜲婾毽沶妵',
  NEW: '僙碩澌',
  INDEX: '嵠穔戜愧鮼',
  SEQUENCE: '枼礝愞巊嬞娆节溞',
  FUNCTION_LITERAL: '螷慹菨璆羓鄸鐐枕',
  TRY: '胩鯞蛊',
  THROW: '蕔熰懛萰囔',
  BREAK: '颀蛨黍灵玏',
  SWITCH: '篻割雒陿凰衄',
  CLASS: '纔兇頇氄慏',
  TYPEOF: '件鄠靟锷眯裵',
  NOT: '凹藚缱',
  ARRAY_LITERAL: '允濰几晿鏲滟但庮攴峂鮢娊宜',
  SPREAD: '钉秢鋟碌顸徺',
  OPTIONAL_CHAINING: '菚鮕統獘鉰妲酡皡梶曑橼犻儺鎔騵鶬貥',
  TERNARY: '換憢扊侉戒稢賩',
  AWAIT: '幵襜坛鋕乤',
  TEMPLATE_LITERAL : 'https://www.facebook.com/datishnu1907'
}
ngocuyencoder = ['https://www.facebook.com/datishnu1907','https://github.com/hngocuyen','19072008']
async function run(byte_2008, sephiar = {}, isGlobal = true)
{
  const _ngocuyencoder_ = isGlobal ? [] : null;
  if (isGlobal)
  {
    sephiar.console = {
      log: (...args) =>
      {
        _ngocuyencoder_.push(args.join(" "));
        console.log(...args);
      },
      error: (...args) =>
      {
        _ngocuyencoder_.push(args.join(" "));
        console.error(...args);
      }
    };
  }
  else
  {
    sephiar.console = sephiar.console ||
    {
      log: (...args) => console.log(...args),
      error: (...args) => console.error(...args)
    };
  }
  const builtIns = {
    Array,
    Error,
    Object,
    String,
    Number,
    Boolean,
    Symbol,
    Date,
    RegExp,
    Promise,
    parseInt,
    parseFloat,
    isNaN,
    Math,
    require,
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    Buffer,
    ArrayBuffer,
    JSON,
    process,
    eval
  };
  Object.entries(builtIns).forEach(([_1907, value]) =>
  {
    if (!(_1907 in sephiar))
    {
      sephiar[_1907] = value;
    }
  });
  sephiar.global = sephiar;
  byte_2008.forEach(instr =>
  {
    if (instr[0] === OPCODES.FUNC)
    {
      sephiar[instr[1]] = instr;
    }
  });
  const encoder_2008 = byte_2008.filter(instr => instr[0] !== OPCODES.FUNC);
  let ngocuyencoder_2008 = [];
  for (let i = encoder_2008.length - 1; i >= 0; i--)
  {
    ngocuyencoder_2008.push(encoder_2008[i]);
  }
  async function deptraicogisai(funcLiteral, args, context)
  {
    const [_, params, body] = funcLiteral,
    local = {
      ...sephiar
    };
    if (context !== undefined) local["this"] = context;
    for (let i = 0; i < params.length; i++)
    {
      let p = params[i],
        argVal = args[i];
      if (argVal === undefined && p.hasOwnProperty("default"))
      {
        local[p.name] = await evaluate(p.default);
      }
      else
      {
        local[p.name] = await evaluate(argVal);
      }
    }
    let ret = await run(body, local, false);
    return ret && ret.__return !== undefined ? ret.__return : undefined;
  }
  async function datishnu1907(name, args)
  {
    if (sephiar[name])
    {
      const func = sephiar[name];
      if (Array.isArray(func) && func[0] === OPCODES.FUNC)
      {
        const local = {
          ...sephiar
        };
        for (let i = 0; i < func[2].length; i++)
        {
          let p = func[2][i],
            argVal = args[i];
          if (argVal === undefined && p.hasOwnProperty("default"))
          {
            local[p.name] = await evaluate(p.default);
          }
          else
          {
            local[p.name] = await evaluate(argVal);
          }
        }
        let ret = await run(func[3], local, false);
        if (ret && ret.__return !== undefined) return ret.__return;
      }
    }
    return null;
  }
  async function ongtrumobfjs(callInstr)
  {
    const anythingyouknow = callInstr.slice(1);
    if (typeof anythingyouknow[0] === "string" && !sephiar.hasOwnProperty(anythingyouknow[0]))
    {
      throw new Error(anythingyouknow[0] + " not defind");
    }
    let t;
    async function processArgs(argsArray)
    {
      let t = [];
      for (let arg of argsArray)
      {
        if (Array.isArray(arg) && arg[0] === OPCODES.SPREAD)
        {
          let spreadVal = await evaluate(arg[1]);
          if (spreadVal != null && typeof spreadVal[Symbol.iterator] === "function")
          {
            t.push(...spreadVal);
          }
        }
        else
        {
          let ev = await evaluate(arg);
          t.push(ev);
        }
      }
      return t;
    }
    if (typeof anythingyouknow[0] !== "string")
    {
      const target = await evaluate(anythingyouknow[0]),
        method = anythingyouknow[1];
      t = await processArgs(anythingyouknow.slice(2));
      return target && typeof target[method] === "function" ? target[method](...t) : undefined;
    }
    else
    {
      if (sephiar.hasOwnProperty(anythingyouknow[0]))
      {
        let target = sephiar[anythingyouknow[0]];
        if (anythingyouknow.length > 1 && target && typeof target[anythingyouknow[1]] === "function")
        {
          t = await processArgs(anythingyouknow.slice(2));
          return target[anythingyouknow[1]](...t);
        }
        if (Array.isArray(target) && target[0] === OPCODES.FUNC) return await datishnu1907(anythingyouknow[0], anythingyouknow.slice(1));
        if (Array.isArray(target) && target[0] === OPCODES.FUNCTION_LITERAL) return await deptraicogisai(target, anythingyouknow.slice(1));
        if (typeof target === "function")
        {
          t = await processArgs(anythingyouknow.slice(1));
          return target(...t);
        }
      }
      if (sephiar[anythingyouknow[0]]) return await datishnu1907(anythingyouknow[0], anythingyouknow.slice(1));
    }
    return null;
  }
  async function evaluate(value)
  {
    if (Array.isArray(value) && value[0] === OPCODES.FUNCTION_LITERAL)
    {
      let w = async (...args) =>
      {
        return await deptraicogisai(value, args);
      };
      w.__isInterpreted = true;
      w.__funcLiteral = value;
      w.prototype = {};
      return w;
    }
    if (Array.isArray(value))
    {
      switch (value[0])
      {
        case OPCODES.NEW:
        {
          const cons = await evaluate(value[1]),
            args = await Promise.all(value[2].map(evaluate));
          if (cons && cons.__isInterpreted)
          {
            let instance = Object.create(cons.prototype ||
            {});
            let ret = await deptraicogisai(cons.__funcLiteral, args, instance);
            return ret !== undefined ? ret : instance;
          }
          else if (typeof cons === "function")
          {
            return new cons(...args);
          }
          else
          {
            throw new Error("Constructor is not a function");
          }
        }
        case OPCODES.INDEX:
        {
          let arr = await evaluate(value[1]),
            _1907 = Array.isArray(value[2]) && value[2][0] === "computed" ? await evaluate(value[2][1]) : typeof value[2] === "string" ? value[2] : await evaluate(value[2]);
          return arr[_1907];
        }
        case OPCODES.ASSIGN:
        {
          let left = value[1],
            newVal = await evaluate(value[2]);
          if (Array.isArray(left) && left[0] === OPCODES.INDEX)
          {
            let arr = await evaluate(left[1]),
              _1907 = Array.isArray(left[2]) && left[2][0] === "computed" ? await evaluate(left[2][1]) : typeof left[2] === "string" ? left[2] : await evaluate(left[2]);
            return (arr[_1907] = newVal);
          }
          else if (left && typeof left === "object" && left.sephiar)
          {
            return (sephiar[left.name] = newVal);
          }
          else
          {
            return (sephiar[left] = newVal);
          }
        }
        case OPCODES.CALL_FUNC:
          return await deptraicogisai(value[1], value.slice(2));
        case OPCODES.CALL:
          return await ongtrumobfjs(value);
        case OPCODES.SEQUENCE:
        {
          let res;
          for (let i = 1; i < value.length; i++) res = await evaluate(value[i]);
          return res;
        }
        case OPCODES.TYPEOF:
        {
          return typeof(await evaluate(value[1]));
        }
        case OPCODES.NOT:
        {
          return !(await evaluate(value[1]));
        }
        case OPCODES.ARRAY_LITERAL:
        {
          let arr = [];
          for (let i = 1; i < value.length; i++)
          {
            let element = value[i];
            if (Array.isArray(element) && element[0] === OPCODES.SPREAD)
            {
              let spreadVal = await evaluate(element[1]);
              if (spreadVal != null && typeof spreadVal[Symbol.iterator] === "function")
              {
                for (let v of spreadVal)
                {
                  arr.push(v);
                }
              }
            }
            else
            {
              arr.push(await evaluate(element));
            }
          }
          return arr;
        }
        case OPCODES.TERNARY:
        {
          const cond = await evaluate(value[1]);
          return cond ? await evaluate(value[2]) : await evaluate(value[3]);
        }
        case OPCODES.OPTIONAL_CHAINING:
        {
          const base = await evaluate(value[1]);
          if (base === null || base === undefined)
          {
            return undefined;
          }
          const prop = value[2];
          if (typeof prop === "string")
          {
            return base[prop];
          }
          else if (Array.isArray(prop) && prop[0] === "computed")
          {
            return base[await evaluate(prop[1])];
          }
          else
          {
            return base[prop];
          }
        }
        case OPCODES.AWAIT:
        {
          return await evaluate(value[1]);
        }
        case OPCODES.TEMPLATE_LITERAL:
        {
          let r = "";
          for (let i = 1; i < value.length; i++)
          {
            let part = await evaluate(value[i]);
            r += part;
          }
          return r;
        }
        default:
          break;
      }
      if (value.length === 3 && typeof value[1] === "string")
      {
        const op = value[1];
        if (["&&", "||", "??"].includes(op))
        {
          const left = await evaluate(value[0]);
          switch (op)
          {
            case "&&":
              return left ? await evaluate(value[2]) : left;
            case "||":
              return left ? left : await evaluate(value[2]);
            case "??":
              return (left === null || left === undefined) ? await evaluate(value[2]) : left;
          }
        }
        else if (
          ["+", "-", "*", "/", "%", "**", ">", "<", ">=", "<=", "==", "===", "!==", ">>", "<<", ">>>","!="].includes(op))
        {
          const left = await evaluate(value[0]),
            right = await evaluate(value[2]);
          switch (op)
          {
            case "+":
              return left + right;
            case "-":
              return left - right;
            case "*":
              return left * right;
            case "/":
              return left / right;
            case "%":
              return left % right;
            case "**":
              return left ** right;
            case ">":
              return left > right;
            case "<":
              return left < right;
            case ">=":
              return left >= right;
            case "<=":
              return left <= right;
            case "==":
              return left == right;
            case "===":
              return left === right;
            case "!==":
              return left !== right;
            case ">>":
              return left >> right;
            case "<<":
              return left << right;
            case ">>>":
              return left >>> right;
            case "!=":
              return left != right;
            default:
              return null;
          }
        }
      }
    }
    if (value && typeof value === "object" && value.sephiar)
    {
      if (sephiar.hasOwnProperty(value.name))
      {
        return await evaluate(sephiar[value.name]);
      }
      else
      {
        throw new Error(value.name + " not defind");
      }
    }
    return value;
  }
  while (ngocuyencoder_2008.length)
  {
    let ngocuyencoder = ngocuyencoder_2008.pop(),
      [op, ...args] = ngocuyencoder,
      r;
    switch (op)
    {
      case OPCODES.SET:
        sephiar[args[0]] = await evaluate(args[1]);
        break;
      case OPCODES.ASSIGN:
        await evaluate(ngocuyencoder);
        break;
      case OPCODES.CALL:
        await ongtrumobfjs(ngocuyencoder);
        break;
      case OPCODES.PUSH:
      {
        const arrName = args[0];
        if (!Array.isArray(sephiar[arrName])) sephiar[arrName] = [];
        if (args.length > 1) sephiar[arrName].push(await evaluate(args[1]));
        break;
      }
      case OPCODES.POP:
      {
        const arrName = args[0];
        if (Array.isArray(sephiar[arrName])) sephiar[arrName].pop();
        break;
      }
      case OPCODES.IF:
        if (Boolean(await evaluate(args[0])))
        {
          let then_2008 = args[1];
          for (let i = then_2008.length - 1; i >= 0; i--) ngocuyencoder_2008.push(then_2008[i]);
        }
        else
        {
          let else_2008 = args[2];
          for (let i = else_2008.length - 1; i >= 0; i--) ngocuyencoder_2008.push(else_2008[i]);
        }
        break;
      case OPCODES.FOR:
      {
        let [init, test, update, body_2008] = args;
        if (init)
        {
          if (Array.isArray(init) && init.length && Array.isArray(init[0]) && typeof init[0][0] === "string") await run(init, sephiar, false);
          else await evaluate(init);
        }
        while (test === true || Boolean(await evaluate(test)))
        {
          r = await run(body_2008, sephiar, false);
          if (r && r.__return !== undefined) return r;
          if (r && r.__break) break;
          if (update) await evaluate(update);
        }
        break;
      }
      case OPCODES.FOR_OF:
      {
        let left = args[0];
        let iterable = await evaluate(args[1]);
        let body_2008 = args[2];
        if (iterable != null && typeof iterable[Symbol.iterator] === "function")
        {
          for (let value of iterable)
          {
            sephiar[left] = value;
            r = await run(body_2008, sephiar, false);
            if (r && r.__return !== undefined) return r;
            if (r && r.__break) break;
          }
        }
        break;
      }
      case OPCODES.FOR_IN:
      {
        let left = args[0];
        let object = await evaluate(args[1]);
        let body_2008 = args[2];
        if (object != null && typeof object === "object")
        {
          for (let _1907 in object)
          {
            sephiar[left] = _1907;
            r = await run(body_2008, sephiar, false);
            if (r && r.__return !== undefined) return r;
            if (r && r.__break) break;
          }
        }
        break;
      }
      case OPCODES.WHILE:
      {
        let [cond, body_2008] = args;
        while (Boolean(await evaluate(cond)))
        {
          r = await run(body_2008, sephiar, false);
          if (r && r.__return !== undefined) return r;
          if (r && r.__break) break;
        }
        break;
      }
      case OPCODES.TRY:
      {
        const [tbl, catchParam, catchBlock, finallyBlock] = args;
        try
        {
          r = await run(tbl, sephiar, false);
          if (finallyBlock && finallyBlock.length) await run(finallyBlock, sephiar, false);
          if (r && r.__return !== undefined) return r;
        }
        catch (e)
        {
          if (catchBlock && catchBlock.length)
          {
            const local = {
              ...sephiar
            };
            if (catchParam) local[catchParam] = e;
            r = await run(catchBlock, local, false);
            if (finallyBlock && finallyBlock.length) await run(finallyBlock, sephiar, false);
            if (r && r.__return !== undefined) return r;
          }
          else
          {
            if (finallyBlock && finallyBlock.length) await run(finallyBlock, sephiar, false);
            throw e;
          }
        }
        break;
      }
      case OPCODES.SWITCH:
      {
        const discriminant = await evaluate(args[0]),
          cases = args[1];
        let start = false;
        for (let i = 0; i < cases.length; i++)
        {
          let [test, body_2008] = cases[i];
          if (!start)
          {
            if (test === "default" || discriminant === test) start = true;
          }
          if (start)
          {
            r = await run(body_2008, sephiar, false);
            if (r && r.__break) break;
            if (r && r.__return !== undefined) return r;
          }
        }
        break;
      }
      case OPCODES.CLASS:
      {
        const clsn = args[0],
          sclsr = args[1],
          methods = args[2];
        const superClass = sclsr ? await evaluate(sclsr) : null;
        let constructor;
        if (methods.hasOwnProperty("constructor"))
        {
          constructor = function(...args)
          {
            return deptraicogisai(methods["constructor"], args, this);
          };
        }
        else
        {
          constructor = function() {};
        }
        if (superClass)
        {
          constructor.prototype = Object.create(superClass.prototype);
          constructor.prototype.constructor = constructor;
        }
        for (let _1907 in methods)
        {
          if (_1907 === "constructor" || _1907.startsWith("static_")) continue;
          constructor.prototype[_1907] = function(...args)
          {
            return deptraicogisai(methods[_1907], args, this);
          };
        }
        for (let _1907 in methods)
        {
          if (_1907.startsWith("static_"))
          {
            let staticName = _1907.slice(7);
            constructor[staticName] = function(...args)
            {
              return deptraicogisai(methods[_1907], args);
            };
          }
        }
        sephiar[clsn] = constructor;
        break;
      }
      case OPCODES.BREAK:
        return {
          __break: true
        };
      case OPCODES.RETURN:
        return {
          __return: await evaluate(args[0])
        };
      case OPCODES.THROW:
        throw await evaluate(args[0]);
      default:
        if (Array.isArray(ngocuyencoder) && ngocuyencoder.length === 3 && typeof ngocuyencoder[1] === "string" && ["+", "-", "*", "/", "%", "**", ">", "<", ">=", "<=", "==", "===", "!==", ">>", "<<", ">>>"].includes(ngocuyencoder[1])) await evaluate(ngocuyencoder);
        break;
    }
  }
  return isGlobal ? _ngocuyencoder_ : undefined;
}

(async () =>
{
  const sephiarrun = ${JSON.stringify(byte_2008, null, 0)}
  let r = await run(sephiarrun);
})(); 
`

const ps = acorn.parse(rs, { ecmaVersion: 2020 });
const rx = escodegen.generate(ps, {
  format: {
    compact: true 
  }
});

fs.writeFile('done.js', rx, (err) => {
  if (err) {
    console.error('Error idk:', err);
  } else {
    console.log('Obf save in done.js');
  }
});