const ss = (await Deno.readTextFile("locale_ja.txt")).split("\n");
for (let i = 0; i < ss.length; i++) {
  const s = ss[i];
  if (!s) continue;
  const ss2 = s.split('"="');
  if (ss2.length == 1) continue;
  //console.log(ss2[0], ss2[1]);
  if (ss2[1].startsWith("追加 ")) {
    //console.log(ss2[1].substring(3, ss2[1].length - 1) + "を追加\"");
    ss[i] = ss2[0] + '"="' + ss2[1].substring(3, ss2[1].length - 1) + "を追加\"";
  }
}
await Deno.writeTextFile("locale_ja2.txt", ss.join("\n"));
