// Avec React 19, on peut utiliser le nouveau compilateur React (babel-plugin-react-compiler)
// qui optimise automatiquement les composants en utilisant memo, useMemo et useCallback.
// Nous avons à disposition des directives spéciales pour forcer ou empêcher ces optimisations et le ReactDevTools
// nous indiquera quelles composnats sont optimisés ou non.

// Par défaut, sans directive, le compilateur décide automatiquement des optimisations selon...
// le contenu du composant et pour l'instant c'est assez obscure de comment ça marche. 🧙😮‍💨
// Pour savoir où appliquer les optimisations il observe les conventions de nommage :
// - PascalCase pour les composants
// - 'use' prefix pour les hooks
// Il est donc important de les respecter.
function MyAutoComponent() {
	return <div>My Auto Component</div>;
}

function MyMemoizedComponent() {
	"use memo";
	// Le compilateur va automatiquement envelopper ce composant avec React.memo
	return <div>My Memoized Component</div>;
}

function MyNonMemoizedComponent() {
	"use no memo";
	// Le compilateur va s'assurer que ce composant n'est pas mémorisé
	return <div>My Non-Memoized Component</div>;
}
