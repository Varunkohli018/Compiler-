function runCode() {
      const html = document.getElementById("htmlCode").value;
      const css = "<style>" + document.getElementById("cssCode").value + "</style>";
      const output = document.getElementById("output");
      output.srcdoc = html + css;
    }
    // Auto run on load
    runCode();
