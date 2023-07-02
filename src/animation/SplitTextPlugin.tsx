interface SplitTextOptions {
    words?: number;
    chars?: number;
    spacing?: number;
  }
  
  interface SplitText {
    words: HTMLDivElement[];
    chars: HTMLDivElement[];
  }
  
  class SplitTextPlugin {
    private options: SplitTextOptions;
  
    constructor(element: HTMLElement, options: SplitTextOptions) {
      this.options = {
        words: 1,
        chars: 1,
        spacing: 5,
        ...options,
      };
      this.searchTextNodes = this.searchTextNodes.bind(this);
      this.createElement = this.createElement.bind(this);
      this.splitCharacters = this.splitCharacters.bind(this);
      this.splitWords = this.splitWords.bind(this);
      this.splitTextNodes = this.splitTextNodes.bind(this);
      const textNodes = this.searchTextNodes(element);
      const splitText = this.splitTextNodes(textNodes);
    }
  
    searchTextNodes(element: HTMLElement | null): Node[] {
      let foundTextNodes: Node[] = [];
      if (element == null || element == undefined) return foundTextNodes;
      for (let i = 0; i <= element.childNodes.length - 1; i++) {
        const node = element.childNodes[i];
        if (node.nodeName == '#text') {
          //text found
          foundTextNodes.push(node);
        } else {
          foundTextNodes = foundTextNodes.concat(this.searchTextNodes(node as HTMLElement));
        }
      }
      return foundTextNodes;
    }
  
    createElement(text: string, relatedNode: Node): HTMLDivElement {
      const node = document.createElement('div');
      const nodeText = document.createTextNode(text);
      node.appendChild(nodeText);
      node.style.display = 'inline-block';
      node.style.position = 'relative';
      if (text.trim() == '') node.style.width = String(this.options.spacing) + 'px';
      relatedNode.parentNode!.insertBefore(node, relatedNode);
      return node;
    }
  
    splitCharacters(textNode: Node): HTMLDivElement[] {
      const characters = textNode.nodeValue!.toString();
      let chars: HTMLDivElement[] = [];
      if (characters.trim() != '') {
        for (let c = 0; c <= characters.length - 1; c++) {
          const character = characters.substr(c, 1);
          const char = this.createElement(character, textNode);
          if (character.trim() != '') chars.push(char);
        }
        textNode.parentNode!.removeChild(textNode);
      }
      return chars;
    }
  
    splitWords(textNode: Node): HTMLDivElement[] {
      const textWords = textNode.nodeValue!.toString().split(' ');
      let words: HTMLDivElement[] = [];
      for (let w = 0; w <= textWords.length - 1; w++) {
        const textWord = textWords[w];
        const word = this.createElement(textWord, textNode);
        if (textWord.trim() != '') words.push(word);
        if (w < textWords.length - 1) this.createElement(' ', textNode); //spacing for word
      }
      textNode.parentNode!.removeChild(textNode);
      return words;
    }
  
    splitTextNodes(textNodes: Node[]): SplitText {
      let splitText: SplitText = { words: [], chars: [] };
      for (let i = 0; i <= textNodes.length - 1; i++) {
        const textNode = textNodes[i];
        if (this.options.words == 0) {
          splitText.chars = splitText.chars.concat(
            this.splitCharacters(textNode)
          );
        } else {
          const words = this.splitWords(textNode);
          if (this.options.chars == 1) {
            for (let w = 0; w <= words.length - 1; w++) {
              let word = words[w];
              let chars = this.splitCharacters(word.firstChild!);
              splitText.chars = splitText.chars.concat(chars);
            }
          }
          splitText.words = splitText.words.concat(words);
        }
      }
      return splitText;
    }
  
  }
  
  export default SplitTextPlugin;
  