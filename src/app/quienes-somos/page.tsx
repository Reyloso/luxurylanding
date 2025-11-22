"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, Heart, BookOpen, Compass, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function QuienesSomosPage() {
  const { t } = useLanguage()
  
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-gray-800">{t('about.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('about.title')}</h1>
          <p className="text-xl text-amber-200/90">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story */}
        <Card className="bg-[#161616] text-white border-gray-800">
          <CardHeader className="p-6 pb-4">
            <BookOpen className="h-10 w-10 mb-3 text-amber-200" />
            <CardTitle className="text-white text-xl mb-3">{t('about.storyTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert prose-lg max-w-none text-white/90 px-6 pb-6 space-y-4">
            <p className="text-base leading-relaxed">
              {t('about.storyPara1')}
            </p>
            <p className="font-semibold text-amber-100 mt-6 text-lg">{t('about.inspirationTitle')}</p>
            <p className="text-base leading-relaxed">
              {t('about.storyPara2')}
            </p>
            <p className="text-base leading-relaxed">
              {t('about.storyPara3')}
            </p>
            <p className="italic text-amber-100 mt-6 text-base leading-relaxed">
              {t('about.storyPara4')}
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">{t('about.valuesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Target className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">{t('about.professionalismTitle')}</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {t('about.professionalismDesc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Users className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">{t('about.communityTitle')}</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {t('about.communityDesc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Award className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">{t('about.excellenceTitle')}</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {t('about.excellenceDesc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Heart className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">{t('about.passionTitle')}</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {t('about.passionDesc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardHeader className="p-6 pb-4">
              <Compass className="h-10 w-10 mb-3 text-amber-200" />
              <CardTitle className="text-white text-xl mb-3">{t('about.missionTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 px-6 pb-6">
              <p className="text-base leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#161616] text-white border-gray-800">
            <CardHeader className="p-6 pb-4">
              <Eye className="h-10 w-10 mb-3 text-amber-200" />
              <CardTitle className="text-white text-xl mb-3">{t('about.visionTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 px-6 pb-6">
              <p className="text-base leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
