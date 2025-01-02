# コマンド履歴

以下は、リモートリポジトリを作成し、環境設定を行ったコマンド履歴を整理したものです。

## **Node.jsとTypeScriptの設定**

### **n（Node.jsバージョン管理）のインストール**
```bash
sudo npm install -g n
sudo n stable      # 最新の安定版をインストール
sudo n lts         # 最新のLTS版をインストール
```

### **npmグローバルインストール先の変更**
```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=$HOME/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### **TypeScriptのインストールと確認**
```bash
npm install -g typescript
tsc -v            # TypeScriptのバージョン確認
```

---

## **GitHub CLIのインストールと認証**

### **GitHub CLIのインストール**
```bash
sudo apt update
sudo apt install gh
```

### **GitHub CLIでのログイン**
```bash
gh auth login
```

### **リモートリポジトリの作成**
```bash
gh repo create react-tyep --public
```

---

## **Gitの設定とリモートリポジトリのリンク**

### **Gitのユーザー情報の設定**
```bash
git config user.name 'tanimoto'
git config user.email yumenikki2@gmail.com
```

### **リモートリポジトリのリンクとプッシュ**
```bash
git remote add origin https://github.com/tanimoto1996/react-tyep.git
git push origin HEAD
```

---

## **Reactプロジェクトの作成**

### **Viteを使用してReactプロジェクトを作成**
以下の手順でReact + TypeScriptプロジェクトを作成します：

```bash
npm create vite@latest like-button -- --template react-swc-ts
cd like-button/
npm install
npm run dev
```

### **Reactのインストール済みバージョン確認**
```bash
npm list react
```


nextプロジェクト作成

npm install -g yarn
yarn create next-app --example with-typescript random-cat