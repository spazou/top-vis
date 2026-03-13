import { ArrowRight, TrendingUp, Users, Search, Sparkles, BarChart3, Target, CheckCircle2, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Top-visibilite-pro.fr
              </span>
            </div>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Démarrer maintenant
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Solution de visibilité pour professionnels</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Augmentez votre image,
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> multipliez vos clients</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Transformez votre présence en ligne en flux constant de devis qualifiés.
              Optimisé pour Google, les moteurs IA et votre succès local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 text-lg">
                <span>Obtenir plus de clients</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 text-lg">
                Voir comment ça marche
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">+340%</div>
              <div className="text-gray-600">Visibilité moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">+12K</div>
              <div className="text-gray-600">Devis générés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Tout ce dont votre activité a besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète pour transformer votre présence digitale en machine à générer des opportunités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Référencement optimisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Dominez les résultats Google et les moteurs de recherche IA. Soyez trouvé par vos clients au moment exact où ils cherchent vos services.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traffic qualifié</h3>
              <p className="text-gray-600 leading-relaxed">
                Attirez des visiteurs réellement intéressés par vos services. Plus de traffic, plus de conversions, plus de chiffre d'affaires.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Génération de devis</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformez chaque visite en opportunité commerciale. Recevez des demandes de devis qualifiées chaque jour dans votre boîte mail.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-rose-100">
              <div className="w-14 h-14 bg-rose-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IA & Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimisé pour les nouveaux moteurs d'IA comme ChatGPT et Perplexity. Soyez recommandé par l'intelligence artificielle.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-violet-100">
              <div className="w-14 h-14 bg-violet-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ciblage local</h3>
              <p className="text-gray-600 leading-relaxed">
                Dominez votre marché local. Apparaissez en tête quand vos clients recherchent un professionnel près de chez eux.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Résultats mesurables</h3>
              <p className="text-gray-600 leading-relaxed">
                Suivez votre croissance en temps réel. Tableaux de bord clairs pour mesurer votre retour sur investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, rapide, efficace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En quelques étapes, votre activité gagne en visibilité et attire de nouveaux clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyse gratuite</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous analysons votre présence actuelle et identifions les opportunités de croissance pour votre activité.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300"></div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisation complète</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous mettons en place une stratégie sur-mesure pour maximiser votre visibilité sur tous les canaux.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300"></div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Croissance continue</h3>
                <p className="text-gray-600 leading-relaxed">
                  Profitez d'un flux régulier de devis qualifiés et regardez votre activité se développer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Des centaines de professionnels développent leur activité avec nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Depuis que j'ai fait appel à Top Visibilité Pro, mes demandes de devis ont triplé. Mon téléphone n'arrête pas de sonner !"
              </p>
              <div className="font-semibold text-gray-900">Marc L.</div>
              <div className="text-sm text-gray-600">Professionnel indépendant</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Enfin visible sur Google ! Je suis maintenant en première page et mes clients me trouvent facilement. Service au top."
              </p>
              <div className="font-semibold text-gray-900">Sophie D.</div>
              <div className="text-sm text-gray-600">Experte locale</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "ROI incroyable. L'investissement est largement rentabilisé dès le premier mois. Je recommande à tous mes confrères."
              </p>
              <div className="font-semibold text-gray-900">Thomas R.</div>
              <div className="text-sm text-gray-600">Entrepreneur local</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Rejoignez des centaines de professionnels qui développent leur activité grâce à notre expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 text-lg">
              <span>Demander une analyse gratuite</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-emerald-100">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Résultats garantis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">Top-visibilite-pro.fr</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La solution de visibilité pour les professionnels qui veulent développer leur activité locale.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Référencement SEO</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Optimisation IA</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Génération de leads</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Analyse de performance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Demander un devis</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Nous contacter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Top-visibilite-pro.fr - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
