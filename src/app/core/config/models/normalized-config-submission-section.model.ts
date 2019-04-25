import { autoserialize, inheritSerialization } from 'cerialize';
import { SectionsType } from '../../../submission/sections/sections-type';
import { NormalizedConfigObject } from './normalized-config.model';
import { SubmissionFormsModel } from './config-submission-forms.model';
import { SubmissionSectionVisibility } from './config-submission-section.model';
import { mapsTo } from '../../cache/builders/build-decorators';
import { resourceType } from '../../shared/resource-type.decorator';
import { ResourceType } from '../../shared/resource-type';

/**
 * Normalized class for the configuration describing the submission section
 */
@mapsTo(SubmissionFormsModel)
@inheritSerialization(NormalizedConfigObject)
@resourceType(ResourceType.SubmissionForm, ResourceType.SubmissionForms)
export class NormalizedSubmissionSectionModel extends NormalizedConfigObject<SubmissionFormsModel> {

  /**
   * The header for this section
   */
  @autoserialize
  header: string;

  /**
   * A boolean representing if this submission section is the mandatory or not
   */
  @autoserialize
  mandatory: boolean;

  /**
   * A string representing the kind of section object
   */
  @autoserialize
  sectionType: SectionsType;

  /**
   * The [SubmissionSectionVisibility] object for this section
   */
  @autoserialize
  visibility: SubmissionSectionVisibility

}
