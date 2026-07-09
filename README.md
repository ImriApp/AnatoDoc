# ATLOMY Documentation

This repository is the official documentation hub for ATLOMY.

It is written for:

- ATLOMY team members working on lexicon, modeling, and publication workflows
- researchers in digital humanities and ancient medicine who want to understand the project methods

The documentation focuses on how source materials become structured lexical data, 3D models, and public-facing outputs on Atlomy.com.

## Project Context

ATLOMY is an international, multidisciplinary research project funded by the European Research Council and based at The Hebrew University of Jerusalem.

The project studies Greco-Roman anatomical thought by combining:

- historical and philological research
- lexicon engineering
- 3D anatomical modeling
- web publication workflows

ATLOMY develops tools and methods to analyze, interpret, and reconstruct complex anatomical concepts described in ancient texts.

## Repository Structure

- [Admin Dashboard](Admin%20Dashboard/admin%20dashboard.mdx): operational publishing and access-control documentation.
- [Atlomy App](Admin%20Dashboard/atlomy%20app.mdx): content synchronization, jobs, model-lemma links, and page management.
- [Authentication and Authorization](Admin%20Dashboard/authentication%20and%20authorization.mdx): users, groups, and permission workflows.
- [Greek Lexicon DB](Greek%20Lexicon%20DB/greek%20lexicon%20db.mdx): lexicon architecture and data flow.
- [Lexicon DB (The Lemma Pool)](Greek%20Lexicon%20DB/lemma%20pool.mdx): publication-ready lemma dataset.
- [Supporting Tables](Greek%20Lexicon%20DB/supporting%20tables.mdx): foundational reference and classification tables.
- [Greek Lexicon DB Style Guide](Greek%20Lexicon%20DB/greek%20lexicon%20db%20style%20guide.mdx): naming, translation, transliteration, and citation standards.
- [Greek-Arabic Lexicon](Greek%20Lexicon%20DB/greek-arabic%20lexicon.mdx): filtered lexical correspondences from source references.
- [Visualizations](Visualizations/visualizations.mdx): 3D modeling instruction workflows and project tracking.
- [Dissections](Dissections/dissections.mdx): reenactment data model, schema, and publication support workflow.
- [How to Use ATLOMY](how%20to%20use%20atlomy.mdx): public-facing user guide for lexicon, atlas, and reenactment content.
- [ATLOMY Glossary](atlomy%20glossary.md): shared terminology used across the documentation set.

## End-to-End Pipeline

1. Source and standardization
Ancient-language forms, references, and metadata are normalized using the style guide and supporting tables.

2. Lexicon data construction
INCEpTION annotations and bibliographic data are consolidated in Ancient Word Full Reference, then aggregated into the Lemma Pool.

3. Modeling specification
Visualizations converts research decisions into structured Tables of Instructions for model production and review.

4. Dashboard synchronization and publication
Atlomy App configuration runs synchronize Lemma Pool content into the Admin Dashboard, where content is validated, linked, and published.

5. Public delivery
Atlomy.com exposes lemma pages, 3D atlas models, and reenactment materials for research and educational use.

## Main Achievements

1. A digital lexicon of Greco-Roman anatomical terminology covering more than 1,000 terms.
2. An interactive digital atlas of 3D reconstructions covering 10 Greco-Roman anatomies.
3. An annotated photo and video corpus presenting selected reenactments of ancient dissections.