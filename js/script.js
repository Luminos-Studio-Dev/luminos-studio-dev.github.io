// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Liminos Studio Dev ホームページがロードされました。');

    // 1. スクロール時のヘッダーの変化（例）
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(31, 41, 55, 0.95)'; // スクロールでヘッダーを濃くする
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'var(--bg-dark)';
            header.style.boxShadow = 'none';
        }
    });

    // 2. プロジェクトデータの動的読み込み（将来の拡張用）
    const loadProjects = () => {
        // ここに /api/projects からデータを取得し、
        // .project-grid に動的にHTML要素を追加するロジックを実装します。
        // 例: fetch('/api/projects').then(res => res.json()).then(data => { ... });
        
        console.log('（将来的にプロジェクトデータをAPIから読み込みます）');
    };

    // ページの読み込み完了時に実行
    loadProjects();
});
